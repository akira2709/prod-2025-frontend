"use client"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname } from "next/navigation"
import { TrophyType } from "@/shared/models/chilren.js"
import { Trophy } from "lucide-react"
import styles from "./index.module.css"
import { Loader } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"
import { Fetch } from "@/shared/api/use-fetch"

const ClientLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/client/sign-in", "/client/sign-up"].includes(pathName)

  const [isTrophyOpen, setTrophyOpen] = useState<boolean>(false)
  const [tr, setTr] = useState<TrophyType[] | null>(null)
  const handleClick = async () => {
  	setTrophyOpen(prev => !prev)
	 	const { data, error } = await Fetch<TrophyType[]>({
			endpoint: "/client/achievements"
		})
		setTr(data)

  }
  return (
    <>
      {children}
      {!authRoute && <Menu />}
			<div className={styles.wrapper} onClick={handleClick}>
     		<Trophy className={styles.trophy} />
      </div>
			<div className={clsx(styles.trophyList, isTrophyOpen ? styles.open : styles.close)} >
				{ tr === null ? (<Loader />) : tr?.map((trophy: TrophyType, index: number) => {
					return (
						<div className={styles.trophyContainer} key={index}>
							<p className={styles.title}>{ trophy.title }</p>
							<div className={styles.progress}>
								<div className={ styles.filler } style={{width: `${(trophy.n_count / trophy.target_usages) * 100}%`}}></div>
							</div>
						</div>
					)
				})}
			</div>
    </>
  )
}
export default ClientLayout
