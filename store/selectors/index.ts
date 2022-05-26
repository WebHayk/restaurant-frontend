import {useTypedSelector} from "@store/selectors/config";

export const useMainSelector = () => useTypedSelector(state => state.main);