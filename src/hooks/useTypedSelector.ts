import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/configureStore";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector