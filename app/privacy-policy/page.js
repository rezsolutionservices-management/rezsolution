export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>RezSolution Services</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>Privacy & Confidentiality Policy</h1>
        <p style={{ color: "#CCCCCC", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>Owner/Operator: Daniel Albert &nbsp;|&nbsp; Effective Date: May 1st, 2026</p>
      </section>

      <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Barlow, sans-serif", color: "#333333", lineHeight: 1.8 }}>

          {[
            {
              title: "1. Purpose of This Policy",
              content: "RezSolution Services is committed to protecting the privacy, confidentiality, and security of all personal information, delivery information, business information, and health-related information handled during courier and delivery services. This policy explains how RezSolution Services collects, uses, stores, discloses, protects, and disposes of confidential information while providing courier, delivery, pharmacy, medical, and business support services."
            },
            {
              title: "2. Scope",
              content: "This policy applies to all information handled by RezSolution Services, including customer names, addresses, phone numbers, and delivery instructions; business client information; pharmacy, clinic, or medical office delivery information; prescription delivery information; medical supply delivery details; package labels, receipts, delivery slips, invoices, forms, and notes; photos, text messages, emails, call logs, screenshots, digital records, and delivery confirmations; information shared verbally by customers, clients, pharmacies, clinics, or other organizations; and any information that could identify a person directly or indirectly."
            },
            {
              title: "3. Guiding Principles",
              content: "RezSolution Services follows these core principles: Only collect what is necessary to complete a delivery, provide customer service, process payment, confirm delivery, or meet legal/client requirements. Use information only for the purpose provided. Keep information confidential — delivery information, customer details, and health-related information must not be shared with unauthorized people. Protect information from loss or misuse using reasonable physical, digital, and operational safeguards. Limit access to only people who need the information to complete the delivery or business function. Dispose of information securely when no longer required. Respect community trust — RezSolution Services operates in small communities where privacy is especially important."
            },
            {
              title: "4. Information Collected",
              content: "Customer information collected includes full name, phone number, delivery address, pick-up address, delivery instructions, payment confirmation details, and notes required to complete the delivery. Business client information includes business name, contact person, business address, phone number, email address, delivery instructions, and account or billing details where applicable. For medical or pharmacy deliveries, information may include patient/customer name, delivery address, phone number, prescription package label information visible on packaging, delivery confirmation details, name of person receiving the package, signature or proof of receipt, and special handling instructions."
            },
            {
              title: "5. Confidentiality Requirements",
              content: "All persons working for or on behalf of RezSolution Services must keep confidential information private. Confidential information must not be shared with family, friends, community members, or unauthorized persons; discussed in public places; posted or hinted at on social media; used for personal reasons; used to contact customers outside the delivery purpose; photographed unless required for proof of delivery and authorized by the client; stored on personal devices longer than necessary; left visible in a vehicle; or left unattended in public. Confidentiality continues even after a delivery is completed, after a contract ends, or after a worker stops working with RezSolution Services."
            },
            {
              title: "6. Medical & Pharmacy Deliveries",
              content: "RezSolution Services may provide medical or pharmacy courier services only where the delivery can be completed safely, confidentially, and according to the requirements of the client organization. Packages will be kept sealed and delivered directly to the intended recipient or authorized agent where required. RezSolution Services will follow written instructions from the pharmacy, clinic, or medical client, avoid unnecessary stops or delays, keep packages secure and out of public view, and report lost, stolen, damaged, delayed, misdelivered, or privacy-sensitive incidents immediately. RezSolution Services will not represent itself as a pharmacy, health care provider, medical professional, or licensed medical courier."
            },
            {
              title: "7. Community Confidentiality",
              content: "RezSolution Services operates in and around close-knit First Nations communities where people may know each other personally. This makes confidentiality especially important. Drivers and staff must not use personal knowledge, family relationships, community connections, or curiosity as a reason to access, discuss, or share delivery information. Even if a driver recognizes a customer, address, family member, vehicle, or package source, that information must remain private. A person's delivery needs, medical needs, financial situation, food order, business activity, or personal errands are not community information."
            },
            {
              title: "8. Digital Security",
              content: "RezSolution Services uses password-protected devices and secure digital practices to protect customer information. Delivery records, proof of delivery, and customer information are stored only as long as necessary. Screenshots, photos, and messages are deleted when no longer needed. Customer information is not stored in unsecured apps or shared with unauthorized parties."
            },
            {
              title: "9. Social Media",
              content: "RezSolution Services may use social media for business promotion, but customer privacy must always be protected. Customer names, addresses, photos of customer homes, photos showing labels or prescriptions, stories about specific deliveries that could identify a customer, and medical or pharmacy delivery details will not be posted. Customer reviews or delivery photos may only be shared with clear permission from the customer or business client."
            },
            {
              title: "10. Records Retention",
              content: "Regular delivery messages are retained for 30-90 days unless needed longer. Proof of delivery records are kept for 1-2 years or as required by contract. Invoices and accounting records are kept for 6-7 years for tax and accounting purposes. Incident and breach records are kept for 2-7 years depending on seriousness. Medical and pharmacy delivery records are retained as required by client agreement."
            },
            {
              title: "11. Privacy Breaches",
              content: "A privacy breach may occur when personal or confidential information is lost, stolen, accessed, disclosed, copied, viewed, or used without authorization. All suspected or confirmed privacy breaches must be reported immediately to the owner/operator of RezSolution Services. Steps will be taken to contain the breach, assess what happened, notify the affected client or party where appropriate, document the incident, and take corrective action."
            },
            {
              title: "12. Complaints & Privacy Questions",
              content: "Customers, clients, or partner businesses may contact RezSolution Services with privacy questions, concerns, or complaints. RezSolution Services will review privacy complaints seriously and respond as soon as reasonably possible."
            },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0A1628", marginBottom: "0.75rem", borderLeft: "4px solid #F5C000", paddingLeft: "1rem" }}>{section.title}</h2>
              <p style={{ fontSize: "0.95rem", color: "#555555" }}>{section.content}</p>
            </div>
          ))}

          <div style={{ backgroundColor: "#0A1628", borderRadius: "8px", padding: "2rem", marginTop: "3rem" }}>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#F5C000", marginBottom: "1rem" }}>Privacy Contact</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p style={{ color: "#CCCCCC", fontSize: "0.95rem" }}>Owner/Operator: Daniel Albert</p>
              <p style={{ color: "#CCCCCC", fontSize: "0.95rem" }}>Email: RezSolutionServices@gmail.com</p>
              <p style={{ color: "#CCCCCC", fontSize: "0.95rem" }}>Phone: (548) 888-8803</p>
              <p style={{ color: "#CCCCCC", fontSize: "0.95rem" }}>Messenger: Facebook.com/RezSolutionServices</p>
            </div>
          </div>

          <p style={{ color: "#999999", fontSize: "0.8rem", marginTop: "2rem", fontStyle: "italic" }}>This policy will be reviewed regularly and updated when necessary. Effective Date: May 1st, 2026.</p>

        </div>
      </section>

    </main>
  );
}
