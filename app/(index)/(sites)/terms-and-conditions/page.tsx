import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import careers from '@/public/images/about-us.jpg'


const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Terms and Conditions', path: '/terms-and-conditions' }
]


const TermsConditionsPage = () => {
    return (
        <>
            {/* Breadcrumbs */}
            <section className='mt-3 px-3'>
                <Breadcrumbs items={breadcrumbs} />
            </section>

            {/* About Us Section */}
            <section className='mb-3 px-3 bg-white'>
                <div className="flex flex-col">
                    <div className='p-6 pt-12'>
                        <h3 className='font-extrabold text-2xl uppercase text-center'>Terms & Conditions</h3>
                        <h6 className='text-center text-sm'>General Terms and Conditions</h6>
                    </div>
                    <div className='p-6 lg:w-[55%] lg:my-0 lg:mx-auto'>
                        <h5 className='text-sm leading-[1.2] mb-2 uppercase'><strong>Please read these terms and conditions carefully!</strong></h5>
                        <div className='*:text-sm *:mb-4 *:text-justify'>
                            <p>
                                Welcome to www.impex.com.ng! These Terms of Use describe the
                                terms and conditions applicable to your access and use of
                                the websites, mobile sites and mobile applications
                            </p>
                            <p>
                                By accessing and use of the Sites and Services, you agree to
                                accept and be bound by the Terms. Please do not access or
                                use the Services or the Sites if you do not accept all of
                                the Terms.
                            </p>
                            <p>
                                1. You may not access or use the Services or the Sites and may
                                not accept the Terms
                            </p>
                            <p>
                                2. If you are not of legal age to form a binding contract with
                                Impex.com.ng
                            </p>
                            <p>
                                3. The Terms may not otherwise be modified except in writing by
                                an authorized officer of impex.com.ng
                            </p>
                            <p>
                                4. You must register as a member on the Sites in order to
                                access and use some Services. Further,
                            </p>
                            <p>
                                5. impex.com.ng reserves the right, without prior notice, to
                                restrict access to or use of certain Services (or any features
                                within the Services) to paying Users, or subject to other
                                conditions that impex.com.ng may impose in our discretion.
                            </p>
                            <p>
                                6. As a condition of your access to and use of the Sites or
                                Services, you agree that you will comply with all applicable
                                laws and regulations when accessing or using the Sites or
                                Services.
                            </p>
                            <p>
                                7. You agree that (a) you will not copy, reproduce, download,
                                re-publish, sell, distribute or resell any Services or any
                                information, text, images, graphics, video clips, sound,
                                directories, files, databases or listings, etc available on or
                                through the Sites (the “Site Content”), and (b) you will not
                                copy, reproduce, download, compile or otherwise use any Site
                                Content for the purposes of operating a business that competes
                                with impex.com.ng, or otherwise commercially exploiting the
                                Site Content. Systematic retrieval of Site Content from the
                                Sites to create or compile, directly or indirectly, a
                                collection, compilation, database or directory (whether
                                through robots, spiders, automatic devices or manual
                                processes) without written permission from impex.com.ng is
                                prohibited. Use of any content or materials on the Sites for
                                any purpose not expressly permitted in the Terms is
                                prohibited.
                            </p>
                            <p>
                                8. You must read the following documents which govern the
                                protection and use of personal information about Users in the
                                possession of impex.com.ng and our affiliates:
                            </p>
                            <p>
                                9. You agree not to undertake any action to undermine the
                                integrity of the computer systems or networks of Impex.com.ng
                                and/or any other User nor to gain unauthorized access to such
                                computer systems or networks.
                            </p>
                            <p>
                                10. You agree not to undertake any action which may undermine
                                the integrity of Impex.com’s feedback system, such as leaving
                                positive feedback for yourself using secondary Member IDs or
                                through third parties or by leaving unsubstantiated negative
                                feedback for another User.
                            </p>
                            <p>
                                11. By posting or displaying any information, content or
                                material (“User Content”) on the Sites or providing any User
                                Content to impex.com.ng or our representative(s), and to the
                                extent permitted under applicable laws, you grant an
                                irrevocable, perpetual, worldwide, royalty-free, and
                                sub-licensable (through multiple tiers) license to
                                impex.com.ng to display, transmit, distribute, reproduce,
                                publish, duplicate, adapt, modify, translate, create
                                derivative works, and otherwise use any or all of the User
                                Content in any form, media, or technology now known or not
                                currently known in any manner and for any purpose which may be
                                beneficial to impex.com.ng, the operation of the Sites, the
                                provision of any Services and/or the business of the User. You
                                confirm and warrant to impex.com.ng that you have all the
                                rights, power and authority necessary to grant the above
                                license.
                            </p>
                            <p>
                                12. Information that is protected under data protection laws
                                will only be used and kept in compliance with those laws.
                            </p>
                            <p>
                                13. User must be registered on the Sites to access or use some
                                Services (a registered User is also referred to as a “Member”
                                below). Except with Impex.com’s approval, one User may only
                                register one member account on the Sites.
                            </p>
                            <p>
                                14. Impex.com.ng may cancel or terminate a User’s member
                                account if Impex.com.ng has reasons to suspect that the User
                                has concurrently registered or is in control of two or more
                                member accounts. Further, Impex.com.ng may reject User’s
                                application for registration for any reason.
                            </p>
                            <p>
                                15. Upon registration on the Sites, Impex.com.ng shall assign
                                an account and issue a member ID and password (the latter
                                shall be chosen by a registered User during registration) to
                                each registered User. An account may have a web-based email
                                account with limited storage space for the Member to send or
                                receive emails.
                            </p>
                            <p>
                                16. A set of Member ID and password is unique to a single
                                account. Each Member shall be solely responsible for
                                maintaining the confidentiality and security of your Member ID
                                and password and for all use of and activities that occur
                                under your account (whether such use or activities are
                                authorized or not). No Member may share, assign, or permit the
                                use of your Member account, ID or password by another person,
                                even to other individuals within the Member’s own business
                                entity (where applicable). Member agrees to notify
                                Impex.com.ng immediately if you become aware of any
                                unauthorized use of your password or your account or any other
                                breach of security of your account.
                            </p>
                            <p>
                                17. User agrees to provide all information and materials as
                                may be reasonably required by Impex.com.ng in connection with
                                your transactions conducted on, through or as a result of use
                                of the Sites or Services.
                            </p>
                            <p>
                                18. Impex.com.ng has the right to suspend or terminate any
                                User’s account if the User fails to provide the required
                                information and materials without liability for any losses or
                                damages arising out of or in connection with such suspension
                                or termination.
                            </p>
                            <p>
                                19. In the event that any User has a dispute with any party to
                                a transaction, such User agrees to release and indemnify
                                Impex.com.ng (and our agents, affiliates, directors, officers
                                and employees) from all claims, demands, actions, proceedings,
                                costs, expenses and damages (including without limitation any
                                actual, special, incidental or consequential damages) arising
                                out of or in connection with such dispute or the transaction.
                            </p>
                            <p>.... Intellectual Property Rights</p>
                            <p>
                                20. Impex.com is the sole owner or lawful licensee of all the
                                rights and interests in the Sites and the Site Content. The
                                Sites and Site Content embody trade secrets and other
                                intellectual property rights protected under worldwide
                                copyright and other laws. All title, ownership and
                                intellectual property rights in the Sites and Site Content
                                shall remain with Impex.com, our affiliates or licensors, as
                                the case may be. All rights not otherwise claimed under the
                                Terms or by Impex.com are hereby reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsConditionsPage