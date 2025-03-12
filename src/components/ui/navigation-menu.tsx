
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { AnimatePresence, motion } from "framer-motion"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
    mobileMenuOpen?: boolean;
    setMobileMenuOpen?: (open: boolean) => void;
  }
>(({ className, children, mobileMenuOpen, setMobileMenuOpen, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  
  // Use the provided state control if available, otherwise use local state
  const isOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : isMenuOpen
  const setIsOpen = setMobileMenuOpen || setIsMenuOpen
  
  React.useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    // Handle ESC key to close menu
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEscPress)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEscPress)
    }
  }, [isMobile, isOpen, setIsOpen])

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          Menu
        </button>
      )}
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <NavigationMenuPrimitive.Root
          ref={ref}
          className={cn(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            className
          )}
          {...props}
        >
          {children}
          <NavigationMenuViewport />
        </NavigationMenuPrimitive.Root>
      )}
      
      {/* Mobile Navigation Overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div 
                className="fixed inset-0 z-[101] bg-background flex flex-col overflow-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-semibold">Menu</h2>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground hover:bg-accent rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Mobile Navigation Content */}
                <div className="flex-1 p-4 overflow-auto">
                  <NavigationMenuPrimitive.Root
                    className="flex flex-col w-full space-y-4"
                    {...props}
                  >
                    {children}
                  </NavigationMenuPrimitive.Root>
                </div>
                
                {/* Persistent Contact Bar (Mobile) */}
                <div className="border-t p-4 flex justify-center space-x-4">
                  {/* Contact buttons will be added here when used */}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  )
})
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        isMobile
          ? "flex flex-col w-full space-y-3"
          : "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
})
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex items-center justify-between rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground data-[active]:bg-accent/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-5 py-3 text-base",
      },
      isMobile: {
        true: "w-full text-lg py-3 px-2 flex justify-between",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isMobile: false
    },
  }
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
  }
>(({ className, children, variant, size, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle({ variant, size, isMobile }), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
})
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        isMobile 
          ? "relative mt-1 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
          : "absolute left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
        className
      )}
      {...props}
    />
  )
})
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & {
    active?: boolean;
  }
>(({ className, active, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  
  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(
        "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        isMobile && "text-base py-3",
        active && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    />
  )
})
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

// Add a new hook to handle media queries
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false)
  
  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    
    return () => media.removeEventListener("change", listener)
  }, [matches, query])
  
  return matches
}

// Create a ContactBar component for persistent contact options
const ContactBar = ({
  className,
  whatsapp,
  email,
  phone,
}: {
  className?: string;
  whatsapp?: string;
  email?: string;
  phone?: string;
}) => {
  return (
    <div className={cn("fixed z-50 flex", className)}>
      {whatsapp && (
        <a 
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
          className="bg-green-500 text-white p-2 rounded-full mx-1 hover:bg-green-600 transition-colors"
          aria-label="Contact via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
          </svg>
        </a>
      )}
      
      {email && (
        <a 
          href={`mailto:${email}`}
          className="bg-blue-600 text-white p-2 rounded-full mx-1 hover:bg-blue-700 transition-colors"
          aria-label="Contact via Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      )}
      
      {phone && (
        <a 
          href={`tel:${phone}`}
          className="bg-blue-600 text-white p-2 rounded-full mx-1 hover:bg-blue-700 transition-colors"
          aria-label="Contact via Phone"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      )}
    </div>
  )
}

export {
  useMediaQuery,
  ContactBar,
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
