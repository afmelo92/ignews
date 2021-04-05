import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { cloneElement } from 'react';



interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  activeClassname: string
}

export function ActiveLink({ children, activeClassname, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassname : ''

  return(
    <Link {...rest}>
      {cloneElement(children, 
        {
          className
        }
      )}
    </Link>
  )
}