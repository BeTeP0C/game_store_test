import { IconProps } from "../types/icons"
import { House } from "../components/Icons/House"
import { Stats } from "../components/Icons/Stats"
import { Card } from "../components/Icons/Card"
import { Settings } from "../components/Icons/Settings"

export const menu = [
  {
    id: 1,
    Icon: House,
    page: "main",
    active: true,
    type: "stroke"
  },
  {
    id: 2,
    Icon: Stats,
    page: "",
    active: false,
    type: "fill"
  },
  {
    id: 3,
    Icon: Card,
    page: "",
    active: false,
    type: "fill"
  },
  {
    id: 4,
    Icon: Settings,
    page: "settings",
    active: false,
    type: "fill"
  }
]
