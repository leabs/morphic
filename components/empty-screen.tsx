import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What are the key components of a successful grant proposal?',
    message: 'What are the key components of a successful grant proposal?'
  },
  {
    heading:
      'Can you identify any common weaknesses in grant proposals that I should avoid?',
    message:
      'Can you identify any common weaknesses in grant proposals that I should avoid?'
  },
  {
    heading:
      'How can I effectively align my project goals with the funding agency’s objectives?',
    message:
      'How can I effectively align my project goals with the funding agency’s objectives?'
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
              className="h-auto p-0 text-base"
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
