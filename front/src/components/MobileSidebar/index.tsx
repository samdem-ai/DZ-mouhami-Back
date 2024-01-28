import Sidebar from "@/components/Sidebar/index"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface Props {
  open: boolean
  onOpenChange: (flag: boolean) => void
}
export default function MobileSidebar({ open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left' className='w-[280px] p-0' showClose={false}>
        <Sidebar onClick={() => onOpenChange(false)} />
      </SheetContent>
    </Sheet>
  )
}
