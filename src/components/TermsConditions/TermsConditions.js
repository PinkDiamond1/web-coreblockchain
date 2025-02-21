import React, { PureComponent } from 'react'
import {
    Col
} from 'reactstrap'
import { string } from 'prop-types'
import { withNamespaces } from 'react-i18next'

class TermsConditions extends PureComponent{
	static propTypes = {
		language: string,
	}

    render(){
        const { t } = this.props

        return(
            <Col md='12'>
                <h2><strong>{t('Terms and Conditions')}</strong></h2>

                <p>{t('Welcome to Core Blockchain!')}</p>

                <p>{t('These terms and conditions outline the rules and regulations for the use of Core Foundation\'s Website, located at coreblockchain.cc.')}</p>

                <p>{t('By accessing this website we assume you accept these terms and conditions. Do not continue to use Core Blockchain if you do not agree to take all of the terms and conditions stated on this page.')}</p>

                <p>{t('The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: "Client", "You" and "Your" refers to you, the person who logged on this website and is compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.')}</p>

                <h3><strong>{t('Cookies')}</strong></h3>

                <p>{t('We employ the use of cookies. By accessing Core Blockchain, you agreed to use cookies in agreement with the Core Foundation\'s Privacy Policy.')}</p>

                <p>{t('Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.')}</p>

                <h3><strong>{t('License')}</strong></h3>

                <p>{t('Unless otherwise stated, Core Foundation and/or its licensors are publishing all Core Blockchain content under CC0 (https://creativecommons.org/share-your-work/public-domain/cc0/). You may access this from Core Blockchain for your own personal use subjected to restrictions set in these terms and conditions. Some content is trademarked, which means you cannot use it w/o approval.')}</p>

                <p>{t('You must not')}:</p>
                <ul>
                    <li>{t('Sell, rent or sub-license material from Core Blockchain')}</li>
                    <li>{t('Use trademarked content')}</li>
                </ul>

                <p>{t('This Agreement shall begin on the date hereof.')}</p>

                    <h3><strong>{t('Hyperlinking to our Content')}</strong></h3>

                    <p>{t('The following organizations may link to our Website without prior written approval')}:</p>

                    <ul>
                        <li>{t('Government agencies;')}</li>
                        <li>{t('Search engines;')}</li>
                        <li>{t('News organizations;')}</li>
                        <li>{t('Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and')}</li>
                        <li>{t('System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.')}</li>
                    </ul>

                    <p>{t('These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.')}</p>

                    <p>{t('We may consider and approve other link requests from the following types of organizations')}:</p>

                    <ul>
                        <li>{t('commonly-known consumer and/or business information sources;')}</li>
                        <li>{t('dot.com community sites;')}</li>
                        <li>{t('associations or other groups representing charities;')}</li>
                        <li>{t('online directory distributors')};</li>
                        <li>{t('internet portals;')}</li>
                        <li>{t('accounting, law and consulting firms; and')}</li>
                        <li>{t('educational institutions and trade associations.')}</li>
                    </ul>

                    <p>{t('We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Core Foundation; and (d) the link is in the context of general resource information.')}</p>

                    <p>{t('These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.')}</p>

                    <p>{t('If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to contact@coreblockchain.cc. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.')}</p>

                    <p>{t('Approved organizations may hyperlink to our Website as follows')}:</p>

                    <ul>
                        <li>{t('By use of our foundation name; or')}</li>
                        <li>{t('By use of the uniform resource locator being linked to; or')}</li>
                        <li>{t('By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.')}</li>
                    </ul>

                    <p>{t('No use of Core Blockchain\'s logo or other artwork will be allowed for linking absent a trademark license agreement.')}</p>

                    <h3><strong>{t('iFrames')}</strong></h3>

                    <p>{t('Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.')}</p>

                    <h3><strong>{t('Content Liability')}</strong></h3>

                    <p>{t('We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.')}</p>

                    <h3><strong>{t('Your Privacy')}</strong></h3>

                    <p>{t('Please read Privacy Policy')}</p>

                    <h3><strong>{t('Reservation of Rights')}</strong></h3>

                    <p>{t('We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.')}</p>

                    <h3><strong>{t('Removal of links from our website')}</strong></h3>

                    <p>{t('If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to respond to you directly.')}</p>

                    <p>{t('We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.')}</p>

                    <h3><strong>{t('Disclaimer')}</strong></h3>

                    <p>{t('To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:')}</p>

                    <ul>
                        <li>{t('limit or exclude our or your liability for death or personal injury;')}</li>
                        <li>{t('limit or exclude our or your liability for fraud or fraudulent misrepresentation;')}</li>
                        <li>{t('limit any of our or your liabilities in any way that is not permitted under applicable law; or')}</li>
                        <li>{t('exclude any of our or your liabilities that may not be excluded under applicable law.')}</li>
                    </ul>

                    <p>{t('The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.')}</p>

                    <p>{t('As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.')}</p>
            </Col>
        )
    }
}

export default withNamespaces()(TermsConditions)
