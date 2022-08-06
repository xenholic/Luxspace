import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function Document({ children }) {
    useScrollToTop()
    useScrollAnchor()
    useModalDOM()
    return children
}
