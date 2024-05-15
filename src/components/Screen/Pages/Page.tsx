import NavigationButton from "../NavigationButton/NavigationButton.tsx";
import React from "react";

type Props = {
  changePage: Function
  page: number
  hasPrev: boolean
  hasNext: boolean
  children?: React.JSX.Element
}

export default function Page({page, hasPrev, hasNext, children, changePage}: Props) {
    return (
        <section className='animate__animated animate__fadeIn page'>
          {children}
          {hasPrev && <NavigationButton direction='prev' changePage={() => changePage(page - 1)}/>}
          {hasNext && <NavigationButton direction='next' changePage={() => changePage(page + 1)}/>}
        </section>
    )
}