import * as React from "react"
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../../lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    className={cn(
      "relative h-full w-full overflow-auto",
      className
    )}
    {...props}
  />
)

const ResizableHandle = ResizablePrimitive.PanelResizeHandle



export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

