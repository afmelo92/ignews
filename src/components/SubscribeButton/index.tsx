import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../services/api'
import { getStripeJS } from '../../services/stripe-js'
import styles from './styles.module.scss'

type SubscribeButtonProps = {
  priceId: string
}

export function SubscribeButton( { priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const {push} = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    if (session.activeSubscription) {
      push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')
      
      const {sessionId} = response.data

      const stripe = await getStripeJS()

      await stripe.redirectToCheckout({sessionId})

    } catch(err) {
      console.log(err.message)
    }

  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}


