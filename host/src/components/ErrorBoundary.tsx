import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props,State>{
    state : State = {
        hasError : false
    };

    static getDerivedStateFromError(){
        return {
            hasError : true
        };
    }

    render() {
        if(this.state.hasError){
            return <p>This module is currently unavaliable</p>
        }

        return this.props.children
    }
}
