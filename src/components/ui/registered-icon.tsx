
import React from 'react';
import { Icon, IconProps } from './icon';
import { iconRegistry, IconName, getIcon } from './icon-registry';

export interface RegisteredIconProps extends Omit<IconProps, 'icon'> {
  name: IconName;
}

const RegisteredIcon = React.forwardRef<SVGSVGElement, RegisteredIconProps>(
  ({ name, ...props }, ref) => {
    const IconComponent = getIcon(name);
    
    return (
      <Icon 
        ref={ref}
        icon={IconComponent}
        {...props} 
      />
    );
  }
);

RegisteredIcon.displayName = "RegisteredIcon";

export { RegisteredIcon };
export type { IconName };
