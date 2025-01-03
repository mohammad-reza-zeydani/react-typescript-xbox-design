import { TFooterData } from "../types";
import { FooterData, FooterText } from "./footerData";
const Footer = () => {
    return ( 
        <footer className="mt-10 lg:mt-20">
            {/* footer section one */}
            <section>
                <div className="flex flex-col gap-y-4 bg-black text-white py-6 p-3 sm:py-8 sm:px-12 text-xs  sm:text-sm">
                    {
                        FooterText.map((t:string)=>{
                            return(
                                <span>{t}</span>
                            )
                        })
                    }
                </div>
            </section>
            {/* footer section two */}
            <section className="bg-stone-200 p-3 sm:p-12">
                <div className="flex flex-col flex-wrap gap-y-3 md:flex-row items-start  md:gap-x-12">
                    {
                        FooterData.map((object:TFooterData)=>{
                            return (
                                <div className="mt-4">
                                    <h2 className="text-lg font-bold text-stone-600">{object.title}</h2>
                                    {/* footer links */}
                                    <div className="flex flex-col">
                                        {
                                            object.buttons.map((btn:string)=>{
                                                return(
                                                    <a className="text-sm text-stone-700 active:text-stone-500 mt-2  border-2 group/border link-border" href="#"><span className="text-border">{btn}</span></a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;