
"use client";

import * as React from "react";
import { type ToastProps, type ToastActionElement } from "@/components/ui/toast";
import { cva, type VariantProps } from "class-variance-authority";

const ToastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type ToastVariantProps = VariantProps<typeof ToastVariants>;

export type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: ToastVariantProps["variant"];
  className?: string;
};

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000 * 60;

type ToasterToast = Toast & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function generateId() {
  return `toast-${count++}`;
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: string;
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: string;
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      if (toastId) {
        if (toastTimeouts.has(toastId)) {
          clearTimeout(toastTimeouts.get(toastId));
          toastTimeouts.delete(toastId);
        }
      } else {
        for (const [id, timeout] of toastTimeouts.entries()) {
          clearTimeout(timeout);
          toastTimeouts.delete(id);
        }
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t }
            : t
        ),
      };
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

interface ToastContextType {
  toasts: ToasterToast[];
  toast: (props: Omit<ToasterToast, "id">) => string;
  dismiss: (toastId?: string) => void;
  update: (toastId: string, props: Omit<ToasterToast, "id">) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] });

  React.useEffect(() => {
    const handleRemoveToast = (toastId: string) => {
      dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
    };

    state.toasts.forEach((toast) => {
      if (toastTimeouts.has(toast.id)) return;

      const timeout = setTimeout(() => {
        handleRemoveToast(toast.id);
      }, TOAST_REMOVE_DELAY);

      toastTimeouts.set(toast.id, timeout);
    });

    return () => {
      for (const [, timeout] of toastTimeouts.entries()) {
        clearTimeout(timeout);
      }
    };
  }, [state.toasts]);

  const toast = React.useCallback((props: Omit<ToasterToast, "id">) => {
    const id = generateId();
    dispatch({
      type: actionTypes.ADD_TOAST,
      toast: { ...props, id },
    });
    return id;
  }, []);

  const update = React.useCallback((toastId: string, props: Omit<ToasterToast, "id">) => {
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { id: toastId, ...props },
    });
  }, []);

  const dismiss = React.useCallback((toastId?: string) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
  }, []);

  const contextValue = React.useMemo(() => ({
    toasts: state.toasts,
    toast,
    dismiss,
    update,
  }), [state.toasts, toast, dismiss, update]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

// Helper function to avoid circular dependencies
export function toast(props: Omit<ToasterToast, "id">) {
  try {
    const context = React.useContext(ToastContext);
    if (!context) {
      console.error("Toast failed: ToastProvider not found");
      return "";
    }
    return context.toast(props);
  } catch (e) {
    console.error("Toast failed:", e);
    return "";
  }
}
