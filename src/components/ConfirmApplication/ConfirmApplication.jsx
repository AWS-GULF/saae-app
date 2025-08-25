"use client";

import { Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function ConfirmApplication({ 
  isOpen, 
  onClose, 
  title, 
  message,
  buttonText
}) {
  const { t, dir } = useLanguage();
  
  if (!isOpen) return null;

  // Default messages based on language
  const defaultTitle = dir === 'rtl' ? 'تم استلام طلبك' : 'Your request has been received.';
  const defaultMessage = dir === 'rtl' 
    ? 'شكراً لك على طلبك. سيتواصل معك مستشار SAEE قريباً.' 
    : 'Thank you for your request. SAEE consultant will contact you shortly.';
  const defaultButtonText = dir === 'rtl' ? 'حسناً' : 'Ok';

  // Use provided props or default language-based messages
  const displayTitle = title || defaultTitle;
  const displayMessage = message || defaultMessage;
  const displayButtonText = buttonText || defaultButtonText;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative">
        {/* Checkmark Icon - positioned to overlap the top of the dialog */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-[#6A329F] rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Dialog Box */}
        <div className="bg-[#F5F5F5] border-2 border-[#6A329F] rounded-2xl p-8 pt-12 min-w-[320px] max-w-[400px] text-center shadow-xl" dir={dir}>
          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-4">
            {displayTitle}
          </h2>
          
          {/* Message */}
          <p className="text-lg text-black mb-8 leading-relaxed">
            {displayMessage}
          </p>
          
          {/* Ok Button */}
          <button
            onClick={onClose}
            className="bg-[#6A329F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5A2A8F] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6A329F] focus:ring-offset-2"
          >
            {displayButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
