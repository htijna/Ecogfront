import React, { useEffect } from 'react'
import Footer from './Footer'
import Flexdraw from '../Userhome/Flexdraw'
import { useParams } from 'react-router-dom';

const Popular = () => {

    const { sectionId } = useParams();

  useEffect(() => {
    // Scroll to the target section when the component mounts
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
  <div>
<Flexdraw/>
 
    <div className='about-us-container'>
       <div className="about-us-content">
       <div>
      <h5>Terms and Conditions</h5>
      <p>Welcome to Ecog! These terms and conditions outline the rules and regulations for the use of Ecog's Website, located at www.ecog.com.
      Certainly! :

      <p>This document is an electronic record in terms of Information Technology Act, 2024
         and rules thereunder as applicable and the amended provisions pertaining
          to electronic records in various statutes as amended by the Information Technology Act,
           2000. This electronic record is generated by a computer system and does not 
           require any physical or digital signatures.</p>

<p>This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology
     (Intermediaries guidelines) Rules, 2011, which require publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of the domain name [www.ecogorganic.com] (“Website”), including the related organic product selling  and buying site (hereinafter referred to as the “Platform”).</p>

<p>The Platform is owned by EcoG Organic Private Limited, a company incorporated under the Companies Act,
     1956 with its registered office at Buildings nirmala college arts and science, chalakudy thrissur ,kerala ,680624
     India
       .</p>

<p>Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of
     Use") as applicable to the Platform, including the applicable policies which are incorporated herein by way 
     of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to t
     he Platform for such transaction. By mere use of the Platform, You shall be contracting with EcoG Organic Pr
     ivate Limited and these terms and conditions, including the policies, constitute Your binding obligations wi
     th EcoG.</p>

<p>For the purpose of these Terms of Use, wherever the context so requires, "You" or "User" shall mean any natura
    l or legal person who has agreed to become a buyer on the Platform by providing Registration Data while regist
    
    ering on the Platform as a Registered User using the computer systems. EcoG allows the User to surf the Platfo
    rm or make purchases without registering on the Platform. The terms "We", "Us", "Our" shall mean EcoG Organic
     Private Limited.</p>

<p>ACCESSING, BROWSING, OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UND
    ER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING. By impliedly or expressly 
    accepting these Terms of Use, You also accept and agree to be bound by EcoG Policies (including but not limited
     to the Privacy Policy available at Privacy) as amended from time to time.</p>
 
      
      </p>
      <h5 id="section-privacy">Privacy Policy</h5>
    
      <p>
        This Privacy Policy describes how Ecog and its affiliates (collectively “Ecog, we, our, us”) collect, use, share, or otherwise process your personal information through Ecog website www.ecog.com, its mobile application, and m-site (hereinafter referred to as the “Platform”).
      </p>
      <p>
        While you can browse sections of the Platform without the need for sharing any information with us, however, please note we do not offer any product or service under this Platform outside India. By visiting this Platform, providing your information, or availing of our product/service, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use, and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree, please do not use or access our Platform.
      </p>
      <h6>Collection of Your Information</h6>
      <p>
        When you use our Platform, we collect and store your information provided by you from time to time. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service, product, or feature on the Platform.
      </p>
      <p>
        We may track your buying behavior, preferences, and other information that you choose to provide on our Platform. We use this information to do internal research on our users' demographics, interests, and behavior to better understand, protect, and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address.
     
    
      
    By accessing this website we assume you accept these terms and conditions. Do not continue to use Ecog if 
        you do not agree to take all of the terms and conditions stated on this page.</p>
      
      <h5>Intellectual Property Rights</h5>
      <p>Other than the content you own, under these Terms, Ecog and/or its licensors own all the intellectual
         property rights and materials contained in this Website.</p>
      
      {/* Continue adding sections to cover various aspects of your terms and conditions */}
      


      <h5>Restrictions</h5>
      <p>You are specifically restricted from all of the following:</p>
      <ul>
        <li>Publishing any Website material in any other media.</li>
        <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
        <li>Publicly performing and/or showing any Website material.</li>
        <li>Using this Website in any way that is or may be damaging to this Website.</li>
        <li>Using this Website in any way that impacts user access to this Website.</li>
        {/* More restrictions */}
      </ul>
      
      {/* Continue with other sections like "Your Privacy", "No warranties", etc. */}
      
     
      
      <h5 id="section-return">No Returns</h5>
<p>This website is provided "as is," with all faults, and EcoG expresses no representations or warranties
     of any kind related to this website or the materials contained on this website. As sellers,
      we do not accept returns for sold products. If a product mismatches the actual product,
       you can contact our customer service team and submit a request.</p>
      


       <h5 id="section-cancel">Cancellation Policy</h5>
<p>At EcoG, we strive to ensure the best shopping experience for our customers.
     As part of our commitment to efficient order processing and timely delivery,
      please note that once an order is placed, 
      it cannot be canceled. We apologize for any inconvenience
       this may cause and encourage you to review your order carefully before completing your purchase.</p>


       <h5 id="section-delivery">Delivery Informtaion</h5>
       <p>Revolutionizing home delivery, Ecog enhances convenience, efficiency, and customer satisfaction.
         Streamlining logistics for a stress-free experience, Ecog unlocks seamless home delivery.</p>
         <p>
<h6>     What are the delivery charges? </h6><p>Delivery charge varies with each Seller.
Sellers incur relatively higher shipping costs on low value items. In such cases,
 charging a nominal delivery charge helps them offset logistics costs.
  Please check your order summary to understand the delivery charges for individual products.
   For Products listed as Ecog , a Rs 40 charge for delivery per item may be applied
    if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free</p>
   <h6> Why does the delivery date not correspond to the delivery timeline of X-Y business days?  </h6>  
   <p>
     It is possible that the Seller or our courier partners have a holiday between the day your placed 
     your order and the date of delivery, which is based on the timelines shown on the product page. 
     In this case, we add a day to the estimated date. Some courier partners and Sellers do not work
      on Sundays and this is factored in to the delivery dates.</p>
      
       <h6>What is the estimated delivery time? </h6>
      < p>
     Business
    Estimated delivery time depends on the following factors:
        The Seller offering the product Product's availability with the Seller The destination to which you 
        want the order shipped to and location of the Seller. Are there any hidden costs (sales tax, octroi etc)
         on items sold by Sellers on Ecog? There are NO hidden charges when you make a purchase on Ecog. List
          prices are final and all-inclusive. The price you see on the product page is exactly what you would pay
          . Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's 
          shipping policy. Why does the estimated delivery time vary for each seller? You have probably noticed
           varying estimated delivery times for sellers of the product you are interested in. Delivery times ar
           e influenced by product availability, geographic location of the Seller</p>
           
              
              <h6> Why is the CoD option not offered in my location? </h6>Availability of CoD depend
              s on the ability of our courier partner servicing your location to accept cash as payment at the 
              time of delivery. Our courier 


</p>
      
      <h5>Limitation of liability</h5>
      <p>In no event shall Ecog, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Ecog, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
      
      {/* Add sections for "Indemnification", "Severability", "Variation of Terms", "Assignment", "Entire Agreement", etc. */}
      
      <h5  id="section-contact">Contact us</h5>
<p>
 Our dedicated customer service team is available round the clock to
   assist you with any queries or concerns you may have.
     You can reach out to us via phone, email and efficient support.
       Your satisfaction is our top priority, and we are committed to resolving any
        issues you may encounter to the best of our ability. Don't hesitate to contact us if you need
         assistance tracking your order or any other assistance related to your p
         urchases. We value your feedback and are always looking for ways to improve our services, s
         o please feel free to share your thoughts and suggestions with us. Thank you for choosing us
          as your preferred shopping destination. We look forward to serving you!
</p>

<h3 style={{ textAlign: 'center', color: 'darkgreen' }}>Thank you for choosing Ecog</h3>

    </div>
      </div>
    </div> 
    <Footer/>
    </div>
  )
}

export default Popular