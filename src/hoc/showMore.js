import { useCallback, useState } from "react"

export const showMore = (Component) => {
    return (props) => {
        const [isShown, setIsShown] = useState(false)
        const open = useCallback(() => {
            setIsShown(true)
        }, [])

        return <Component {...props} {...{ isShown, open }} />
    }
}