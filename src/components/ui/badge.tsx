import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
const badgeVariants = cva('inline-flex h-5 w-fit items-center rounded-full border px-2 py-0.5 text-xs font-medium transition-all', { variants: { variant: { default: 'bg-primary text-primary-foreground border-transparent', secondary: 'bg-secondary text-secondary-foreground border-transparent', outline: 'border-border text-foreground' } }, defaultVariants: { variant: 'default' } })
function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
export { Badge, badgeVariants }
