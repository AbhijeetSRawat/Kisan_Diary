import React from 'react'
import { Link } from 'react-router-dom'
import Chapter1 from '../pages/chapter1'

export default function SideBar() {
  return (
    <div className="flex">
  <aside className="bg-slate-300 w-[250px] md:w-[200px] p-4 min-h-screen">
    <ul className="space-y-3">
      {[
        { path: "/chapter1", label: "उत्तराखंड एक दृष्टि मे" },
        { path: "/meriyojna", label: "मेरी योजना" },
        { path: "/", label: "पन्तनगर विश्वविद्यालय - एक झलक", large: true },
        { path: "/khadyanfasle", label: "खाद्यान्न फसलें" },
        { path: "/dalhanifasle", label: "दलहनी फसलें" },
        { path: "/tilhanifasle", label: "तिलहनी फसलें" },
        { path: "/masale", label: "मसालों की खेती" },
        { path: "/pashu", label: "पशु सम्बन्धी महत्वपूर्ण जानकारीयां", large: true },
        { path: "/motaanaj", label: "मोटे अनाज" },
        { path: "/falfool", label: "फल, फूल एवम सुगंधि फसलों खेती उत्पादन हेतु", large: true },
        { path: "/ganna", label: "गन्ना" },
        { path: "/jaivik", label: "जैविक खेती" },
        { path: "/sabji", label: "सब्जी" },
        { path: "/mudra", label: "मृदा" },
      ].map((item) => (
        <li key={item.path}>
          <Link
            className={`block bg-black text-white rounded-md px-4 h-[45px] flex justify-center items-center hover:bg-white hover:text-black ${
              item.large ? "h-[70px] text-center" : ""
            }`}
            to={item.path}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
</div>

  )
}
