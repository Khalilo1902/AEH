import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p className="gap-8 mt-5 mb-5">{t('kontaktPage.welcome')}</p>
            <h1 className="lg:text-4xl text-xl">
                <span className="font-bold">{t('kontaktPage.title')}</span>
            </h1>
            <div className="font-bold text-md mt-16">
                <p>{t('kontaktPage.generalSecretariat')}</p>
                <p>{t('kontaktPage.name')}</p>
                <p className="mt-3">
                    {t('kontaktPage.address').split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className="text-md mt-6">
                <p>{t('kontaktPage.phone')}</p>
                <p className="underline cursor-pointer ">{t('kontaktPage.email')}</p>
            </div>
        </div>
    );
}

export default ContactInfo;
