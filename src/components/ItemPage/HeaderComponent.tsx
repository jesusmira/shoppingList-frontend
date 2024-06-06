import { Search } from "./Search"
import { TitleComponent } from "./TitleComponent"

export const HeaderComponent = () => {
  return (
    <div className="hidden md:flex flex-row items-start gap-8 pt-8 px-16 ">
      <TitleComponent/>
      <Search /> 
    </div>
  )
}
