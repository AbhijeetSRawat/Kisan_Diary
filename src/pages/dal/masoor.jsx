import React from 'react'
import { Link } from 'react-router-dom'

export default function Masoor() {
  return (
    <div>

<div className="flex justify-between my-10">
      <center>
        <h1 className="h3class text-3xl ml-[35vw] font-semibold">मसूर</h1>
      </center>
      <div style={{ float: 'right' }}>
        <Link className="peechey h-[5vh] w-[5vw] flex justify-center items-center bg-blue-900 text-white rounde" href="/DalhaniFasle">पीछे जाएँ</Link>
      </div>
      </div>
        <>

  <p>
    {" "}
    मसूर रबी मौसम की एक प्रमुख दलहनी फसल है। इसमें अन्य दलहनी फसलो की अपेक्षा
    सूखा सहन करने की क्षमता अधिक होती है। मसूर का अधिक उत्पादन प्राप्त करने हेतु
    निम्न बातों पर विशेष ध्यान देना चाहिए।
    <br />
  </p>
  <p>
    <strong className="strongclass">उन्नत किस्में</strong>
    <br />
  </p>
  <p>उन्नत किस्में का विवरण सारणी 1 में दिया गया है।</p>
  <p></p>
  <div align="center">
    <table width={614} border={0}>
      <tbody>
        <tr>
          <td width={132}>
            <strong className="strongclass">प्रजातियां</strong>
          </td>
          <td width={93}>
            <strong className="strongclass">पकने की अवधि (दिन)</strong>
          </td>
          <td width={87}>
            <strong className="strongclass"> पैदावार कु0/है0</strong>
          </td>
          <td width={98}>
            <strong className="strongclass">उत्पादन क्षेत्र </strong>
          </td>
          <td width={182}>
            <strong className="strongclass">विशेष गुण</strong>
          </td>
        </tr>
        <tr>
          <td>
            <p>पंत एल 406</p>
          </td>
          <td>
            <p>130-135</p>
          </td>
          <td>
            15-20
            <br />
          </td>
          <td>
            देश के उत्तर पश्चिम भाग
            <br />
          </td>
          <td>समय एवं देर से बोने के लिए छोटे दाने।</td>
        </tr>
        {/* <tr>
<td>पंत एल 639<br></td>
<td>130-135</td>
<td>15-20<br></td>
<td>संपूर्ण भारत<br></td>
<td>छोटे दाने । <br></td>
    </tr> */}
        <tr>
          <td>
            पी एल 4<br />
          </td>
          <td>130-135</td>
          <td>
            15-20
            <br />
          </td>
          <td>
            देश के उत्तर पश्चिमी उत्तर प्रदेश्
            <br />
          </td>
          <td>
            छोटे दाने वाली।
            <br />
          </td>
        </tr>
        <tr>
          <td>
            पंत एल 5<br />
          </td>
          <td>120-125</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            उत्तर प्रदेश एवं उत्तराखण्ड
            <br />
          </td>
          <td>
            बहुरोगरोधी, बडे दाने वाली
            <br />
          </td>
        </tr>
        <tr>
          <td>
            पंत एल 7<br />
          </td>
          <td>120-125</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            उत्तराखण्ड, उत्तर पश्चिमी भाग
            <br />
          </td>
          <td>
            बहुरोगरोधी, बडे दाने वाली <br />
          </td>
        </tr>
        <tr>
          <td>
            पंत एल 8<br />
          </td>
          <td>130-135</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            उत्तर पश्चिमी भाग
            <br />
          </td>
          <td>
            बहुरोगरोधी, छोटे दाने वाली
            <br />
          </td>
        </tr>
        <tr>
          <td>
            डी पी एल 15
            <br />
          </td>
          <td>120-125</td>
          <td>
            15-20
            <br />
          </td>
          <td>
            उत्तर पश्चिमी भाग
            <br />
          </td>
          <td>
            बड़े दाने वाली।
            <br />
          </td>
        </tr>
        <tr>
          <td>
            डी पी एल 62
            <br />
          </td>
          <td>120-125</td>
          <td>
            15-20
            <br />
          </td>
          <td>
            उत्तर पश्चिमी भाग
            <br />
          </td>
          <td>
            बड़े दाने वाली।
            <br />
          </td>
        </tr>
        <tr>
          <td>
            वी एल मसूर 5<br />
          </td>
          <td>160-165</td>
          <td>
            15-16
            <br />
          </td>
          <td>
            सम्पूर्ण पहाड़ी क्षेत्र <br />
          </td>
          <td>छोटे दाने वाली।</td>
        </tr>
        <tr>
          <td>
            वी एल मसूर 125 <br />
          </td>
          <td>160-165</td>
          <td>
            15-16
            <br />
          </td>
          <td>
            सम्पूर्ण पहाड़ी क्षेत्र <br />
          </td>
          <td>छोटे दाने वाली।</td>
        </tr>
        <tr>
          <td height={27}>
            वी एल मसूर 126 <br />
          </td>
          <td>160-165</td>
          <td>
            15-16
            <br />
          </td>
          <td>
            सम्पूर्ण पहाड़ी क्षेत्र <br />
          </td>
          <td>छोटे दाने वाली।</td>
        </tr>
        <tr>
          <td>वी एल मसूर 507</td>
          <td>160-165</td>
          <td>
            15-16
            <br />
          </td>
          <td>
            सम्पूर्ण पहाड़ी क्षेत्र <br />
          </td>
          <td>छोटे दाने वाली।</td>
        </tr>
        <tr>
          <td>पंत एल 15</td>
          <td>125-130</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            देश के उत्तरी पश्चिमी मैदानी भ् ाग <br />
          </td>
          <td>बहुरोगरोधी, छोटे दाने वाली</td>
        </tr>
        <tr>
          <td>पंत एल 14</td>
          <td>125-130</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            देश के उत्तरी पश्चिमी मैदानी भ् ाग <br />
          </td>
          <td>बहुरोगरोधी, छोटे दाने वाली</td>
        </tr>
        <tr>
          <td>पंत एल 12</td>
          <td>150-160</td>
          <td>
            13-15
            <br />
          </td>
          <td>
            उत्तराखण्ड के पहाड़ी भ् ाग <br />
          </td>
          <td>बहुरोगरोधी, छोटे दाने वाली</td>
        </tr>
        <tr>
          <td>पंत एल 11</td>
          <td>120-125</td>
          <td>
            18-20
            <br />
          </td>
          <td>
            उत्तराखण्ड के पहाड़ी भ् ाग <br />
          </td>
          <td>बहुरोगरोधी, छोटे दाने वाली</td>
        </tr>
      </tbody>
    </table>
    <br />
    <p />
  </div>
  <p>
    <strong className="strongclass">बीज की मात्रा</strong>
    <br />
  </p>
  <p>
    <strong className="strongclass">समय से बुवाई :</strong> 30-40 कि.ग्रा. प्रति
    हैक्टर
    <br />
    <strong className="strongclass">देर से बुवाई :</strong> 40-50 कि.ग्रा. प्रति
    हैक्टर
    <br />
    <strong className="strongclass">बड़े दाने वाली प्रजाति:</strong> 50-55
    कि.ग्रा. प्रति हैक्टर
    <br />
  </p>
  <p>
    <strong className="strongclass">बुवाई का समय एवं विधि</strong>
    <br />
  </p>
  <p>
    पर्वतीय क्षेत्रों में मध्य अक्टूबर से नवम्बर के प्रथम सप्ताह तक बुवाई का
    उचित समय है। तराई एवं भावर क्षेत्रों में नवम्बर का प्रथम पखवाड़ा उपयुक्त
    होता है एवं पछेती बुवाई दिसम्बर के दूसरे सप्ताह तक की जा सकती है। समय से
    बुवाई करने पर कतार से कतार की दूरी 25 सेमी. तथा विलम्ब से बोने पर 15-20
    सेमी. रखनी चाहिए। बुवाई के समय बीज की प्रति 10 किग्रा. मात्रा को 200 ग्राम
    राइजोबियम कल्चर से उपचारित करना चाहिए।
    <br />
  </p>
  <p>
    <strong className="strongclass">उर्वरक</strong>
    <br />
  </p>
  <p>
    दलहनी फसल होने के कारण प्रारम्भ की अवस्था में 15-20 किग्रा. नत्रजन तत्व
    प्रति हैक्टर देना आवश्यक है। बाद में जड़ों में उपस्थित जीवाणु इसकी पूर्ति
    वायुमंडल से कर लेते हैं। फास्फोरस एवं पोटाश तत्व मृदा परीक्षण के आधार पर
    दें। यदि ऐसा सम्भव न हो तो 40-50 किग्रा. फास्फोरस तथा 20-30 किग्रा. पोटाश
    तत्व प्रति हैक्टर की दर से बुवाई से पूर्व अथवा बुवाई के समय दें। उपयुक्त
    राइजोबियम कल्चर द्वारा चने की भाँति बीज उपचार अवश्य करें। <br />
  </p>
  <p>
    <strong className="strongclass">
      सिंचाई
      <br />
    </strong>
  </p>
  <p>
    यदि जाड़े में वर्षा न हो तो पहली सिंचाई फूल आने के पहले तथा दूसरी फलियां
    बनते समय अवश्य करें। अधिक मात्रा में पानी नहीं लगाना चाहिए। <br />
  </p>
  <p>
    <strong className="strongclass">खरपतवारों की रोकथाम</strong>
    <br />
  </p>
  <p>
    बुवाई से 40-50 दिनों तक खरपतवार नियंत्रण अवश्य करें। दो निराई पर्याप्त होती
    है। खरपतवारनाशी का प्रयोग चने की भाँति करें। <br />
  </p>
  <p>
    <strong className="strongclass">फसल सुरक्षा</strong>
  </p>
  <p>
    <strong className="strongclass">रोग नियंत्रण</strong>
    <br />
    <strong className="strongclass">1. उकठा रोग:</strong>
    <br />
  </p>
  <p>
    बुवाई से एक दिन पूर्व जैव नियंत्रक ट्राइकोडर्मा पाउडर 5 ग्राम प्रति कि.ग्रा.
    बीज की दर से बीज का शोधन अवश्य करें।
    <br />
  </p>
  <p>
    <strong className="strongclass">2. रतुआ रोग</strong>
    <br />
  </p>
  <p>
    नियंत्रण के लिए 500 मि.ली ट्राइडोमार्फ 80 ई.सी. का 800 ली. पानी में घोल
    बनाकर प्रति हैक्टर की दर से 10 दिन के अन्तराल पर 2-3 छिडकाव करें। कटाई एवं
    मड़ाई
    <br />
  </p>
  <p>
    <strong className="strongclass">कटाई एवं मड़ाई</strong>
    <br />
  </p>
  <p>
    भलीभांति पकी फसल की ही कटाई करें। मड़ाई करने के बाद दानों को इतना सुखा लें
    कि नमी की मात्रा 12 प्रतिशत से अधिक न हो।
    <br />
  </p>
  <p>
    <strong className="strongclass">
      गन्ने में मसूर <br />
    </strong>
  </p>
  <p>
    शरद ऋतु में बोये जाने वाले गन्ने के खेत में इसकी मिली-जुली खेती की जा सकती
    है। गन्ने की दो कतारों के बीच दो कतारें मसूर की लगाने से करीब 6-8 कुन्तल
    मसूर प्रति हैक्टर प्राप्त की जा सकती है। गन्ने की फसल पर इसका कोई बुरा
    प्रभाव नहीं पड़ता है। <br />
  </p>
  <p>
    <strong className="strongclass">पैदावार</strong>
    <br />
  </p>
  <p>15-20 कुन्तल प्रति हैक्टर। </p>
  <div style={{ float: "right" }}>
    <a  className="peechey h-[5vh] w-[5vw] flex justify-center items-center bg-blue-900 text-white rounded-sm" href="/DalhaniFasle">
      पीछे जाएँ
    </a>
  </div>
</>

    </div>
  )
}
