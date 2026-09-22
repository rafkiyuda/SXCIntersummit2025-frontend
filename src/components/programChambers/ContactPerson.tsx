import React from "react";

interface ContactCardProps {
  name: string;
  whatsappNumber: string;
  lineId: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, whatsappNumber, lineId }) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6 text-center text-white shadow-lg">
      <h3 className="text-2xl font-bold mb-6">{name}</h3>
      
      <div className="space-y-4">
        {/* WhatsApp */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
            </svg>
          </div>
          <span className="text-lg">{whatsappNumber}</span>
        </div>
        
        {/* LINE */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm5.568 7.178c.227 0 .427.073.427.321v2.734c0 .247-.2.32-.427.32-.226 0-.426-.073-.426-.32V8.677l-1.283 2.556c-.094.188-.267.267-.453.267-.187 0-.36-.079-.454-.267L13.669 8.677V10.5c0 .247-.2.32-.427.32-.226 0-.426-.073-.426-.32V7.499c0-.248.2-.321.426-.321.187 0 .347.086.44.254L15.115 10l1.433-2.568c.094-.168.254-.254.44-.254h.58zM9.676 7.178c.227 0 .427.073.427.321V9.18h1.577c.227 0 .427.072.427.32 0 .247-.2.32-.427.32H10.103v.68c0 .247-.2.32-.427.32-.226 0-.426-.073-.426-.32V7.499c0-.248.2-.321.426-.321zm-2.635 0c.227 0 .427.073.427.321v3.001c0 .247-.2.32-.427.32-.226 0-.426-.073-.426-.32V7.499c0-.248.2-.321.426-.321zm-2.268 0c.227 0 .427.073.427.321v2.734c0 .247-.2.32-.427.32-.226 0-.426-.073-.426-.32V7.499c0-.248.2-.321.426-.321z"/>
            </svg>
          </div>
          <span className="text-lg">{lineId}</span>
        </div>
      </div>
    </div>
  );
};

const ContactPersonChambers: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r p-5 from-[#79CCEA] to-[#8257A9] px-4">
      <div className="max-w-4xl mx-auto text-center justify-center">
        {/* Header */}
        <h2
            className="text-4xl md:text-5xl text-center font-extrabold mb-2 bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Contact Person
          </h2>
        <p className="text-white/90 text-lg mb-5 text-justify p-5 max-w-2xl mx-auto">
          Need more information about Chambers? Contact our team for assistance.
        </p>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <ContactCard 
            name="Rendy"
            whatsappNumber="085368263352"
            lineId="rendyyofficial"
          />
          <ContactCard 
            name="Biyan"
            whatsappNumber="081294256002"
            lineId="hzhsh"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPersonChambers;