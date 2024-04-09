import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Keys to successful grant proposal?',
    message: 'Keys to successful grant proposal?'
  },
  {
    heading: 'Common weaknesses in grants to avoid?',
    message: 'Common weaknesses in grants to avoid?'
  },
  {
    heading: 'How can I align my goals with grant terms?',
    message: 'How can I align my goals with grant terms?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="max-w-fit h-auto p-0 text-base word-break"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
