import { TemplateProps, RedactableValue } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent, useState } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { PrivacyFilter, IconRedact } from "../../core/PrivacyFilter";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { BillOfLadingMaerskTpacDocument, BillOfLadingMaerskTpacSchema } from "./types";

interface SectionProps {
  document: BillOfLadingMaerskTpacDocument;
  editable: boolean;
  handleObfuscation: (field: string) => void;
}

const smallText = (text: string): JSX.Element => <p style={{ fontSize: "0.8em" }}>{text}</p>;
const smallStrongText = (text: string): JSX.Element => (
  <p style={{ fontSize: "0.8em" }}>
    <strong>{text}</strong>
  </p>
);

const Terms = (): JSX.Element => {
  // the entire html chunk below is copied from -> https://terms.maersk.com/carriage
  return (
    <div className="terms">
      <h1>Terms for Carriage</h1>
      <h2>1. &nbsp;Definitions&nbsp;</h2>
      <p>
        <strong>“Carriage”</strong> means the whole or any part of the carriage, loading, unloading, handling and any
        and all other services whatsoever undertaken by the Carrier in relation to the Goods.
      </p>
      <p>
        <strong>“Carrier”</strong> means Maersk A/S of 50 Esplanaden, 1263 Copenhagen K, Denmark.
      </p>
      <p>
        <strong>“Container”</strong> includes any container (including an open top container), flat rack, platform,
        trailer, transportable tank, pallet or any other similar article used to consolidate the Goods and any connected
        equipment.&nbsp;
      </p>
      <p>
        <strong>“Freight”</strong> includes all charges payable to the Carrier in accordance with the applicable Tariff
        and this bill of lading.
      </p>
      <p>
        <strong>“Goods”</strong> means the whole or any part of the cargo and any packaging accepted from the Shipper
        and includes any Container not supplied by or on behalf of the Carrier.
      </p>
      <p>
        <strong>“Hague Rules”</strong> means the provisions of the International Convention for the Unification of
        Certain Rules relating to Bills of Lading signed at Brussels on 25th August 1924.
      </p>
      <p>
        <strong>“Holder”</strong> means any Person for the time being in possession of this Bill of Lading or to whom
        rights of suit and/or liability under this bill of lading have been transferred or vested.
      </p>
      <p>
        <strong>“Merchant”</strong> includes the Shipper, Holder, Consignee, Receiver of the Goods, any Person owning or
        entitled to the possession of the Goods or of this bill of lading and anyone acting on behalf of such
        Person.&nbsp;
      </p>
      <p>
        <strong>“Multimodal Transport”</strong> arises if the Place of Receipt and/or the Place of Delivery are
        indicated on the reverse hereof in the relevant boxes.&nbsp;
      </p>
      <p>
        <strong>“Ocean Transport”</strong> arises if the Carriage is not Multimodal Transport.
      </p>
      <p>
        <strong>“Person”</strong> includes an individual, corporation, or other legal entity.&nbsp;
      </p>
      <p>
        <strong>“Subcontractor”</strong> includes owners, charterers and operators of vessels (other than the Carrier),
        stevedores, terminal and groupage operators, road and rail transport operators, warehousemen, and any
        independent contractors employed by the Carrier performing the Carriage or whose services or equipment have been
        used for the Carriage and any direct or indirect subcontractors, servants and agents thereof whether in direct
        contractual privity or not.
      </p>
      <p>
        <strong>“Terms and Conditions”</strong> means all terms, rights, defences, provisions, conditions, exceptions,
        limitations and liberties hereof.&nbsp;
      </p>
      <p>
        <strong>“US COGSA”</strong> means the US Carriage of Goods by Sea Act 1936.&nbsp;
      </p>
      <p>
        <strong>“Vessel”</strong> means any water borne craft used in the Carriage under this bill of lading which may
        be a feeder vessel or an ocean vessel.
      </p>
      <p>&nbsp;</p>
      <h2>2. Carrier&apos;s Tariff</h2>
      <p>
        The terms and conditions of the Carrier’s applicable Tariff are incorporated herein. Attention is drawn to the
        terms therein relating to free storage time and to container and vehicle demurrage or detention. Copies of the
        relevant provisions of the applicable Tariff are obtainable from the Carrier upon request.&nbsp; In the case of
        inconsistency between this bill of lading and the applicable Tariff, the bill of lading shall prevail.
      </p>
      <p>&nbsp;</p>
      <h2>3. Warranty&nbsp;</h2>
      <p>
        The Merchant warrants that in agreeing to the Terms and Conditions hereof he is, or has the authority to
        contract on behalf of, the Person owning or entitled to possession of the Goods and this bill of lading.
      </p>
      <p>&nbsp;</p>
      <h2>4. Sub Contracting</h2>
      <p>
        4.1 The Carrier shall be entitled to sub contract on any terms whatsoever the whole or any part of the Carriage.
      </p>
      <p>4.2 It is hereby expressly agreed that:</p>
      <p>
        (a) No Subcontractor, agent or servant shall in any circumstances whatsoever be under any liability whatsoever
        to the Merchant for any loss, damage or delay of whatsoever kind arising or resulting directly or indirectly
        from any act, neglect or default on the Subcontractor, agent or servant’s part while acting in the course of or
        in connection with the Goods or the Carriage of the Goods.&nbsp;
      </p>
      <p>(b)</p>
      <p>
        (i) The Merchant undertakes that no claim or allegation whether arising in contract, bailment, tort or otherwise
        shall be made against any servant, agent, or Subcontractor of the Carrier which imposes or attempts to impose
        upon any of them or any vessel owned or chartered by any of them any liability whatsoever in connection with the
        Goods or the Carriage of the Goods whether or not arising out of negligence on the part of such Person. The
        Subcontractor, agent or servant shall also be entitled to enforce the foregoing covenant against the Merchant;
        and
      </p>
      <p>
        (ii) &nbsp;if any such claim or allegation should nevertheless be made, to indemnify the Carrier against all
        consequences thereof.
      </p>
      <p>
        (c) Without prejudice to the generality of the foregoing provisions of this clause, every exemption, limitation,
        condition and liberty contained herein (other than Art III rule 8 of the Hague Rules) and every right, exemption
        from liability, defence and immunity of whatsoever nature applicable to the Carrier or to which the Carrier is
        entitled hereunder including the right to enforce any jurisdiction provision contained herein (clause 26) shall
        also be available and shall extend to every such Subcontractor, agent or servant, who shall be entitled to
        enforce the same against the Merchant.
      </p>
      <p>
        4.3 The provisions of clause 4.2(c) including but not limited to the undertaking of the Merchant contained
        therein, shall extend to all claims or allegations of whatsoever nature against other Persons chartering space
        on the carrying vessel.
      </p>
      <p>
        4.4 The Merchant further undertakes that no claim or allegation in respect of the Goods shall be made against
        the Carrier by any Person other than in accordance with these Terms and Conditions which imposes or attempts to
        impose upon the Carrier any liability whatsoever in connection with the Goods or the Carriage of the Goods,
        whether or not arising out of negligence on the part of the Carrier, and if any such claim or allegation should
        nevertheless be made, to indemnify the Carrier against all consequences thereof.
      </p>
      <p>&nbsp;</p>
      <h2>5. Carrier&apos;s Responsibility: Ocean Transport</h2>
      <p>
        5.1 Where the Carriage is Ocean Transport, the Carrier undertakes to perform and/or in his own name to procure
        performance of the Carriage from the Port of Loading to the Port of Discharge. The liability of the Carrier for
        loss of or damage to the Goods occurring between the time of acceptance by the Carrier of custody of the Goods
        at the Port of Loading and the time of the Carrier tendering the Goods for delivery at the Port of Discharge
        shall be determined in accordance with Articles 1-8 of the Hague Rules save as is otherwise provided in these
        Terms and Conditions. These articles of the Hague Rules shall apply as a matter of contract.
      </p>
      <p>
        5.2 The Carrier shall have no liability whatsoever for any loss or damage to the Goods, howsoever caused, if
        such loss or damage arises before acceptance by the Carrier of custody of the Goods or after the Carrier
        tendering the cargo for delivery. Notwithstanding the above, to the extent any applicable compulsory law
        provides to the contrary, the Carrier shall have the benefit of every right, defence, limitation and liberty in
        the Hague Rules as applied by clause 5.1 during such additional compulsory period of responsibility,
        notwithstanding that the loss or damage did not occur at sea.
      </p>
      <p>
        5.3 Where US COGSA applies then the provisions stated in the said Act shall govern during Carriage to or from a
        container yard or container freight station at the Port of Loading before loading on the vessel or at the Port
        of Discharge before delivery to an inland carrier.
      </p>
      <p>
        5.4 If the Carrier is requested by the Merchant to procure Carriage by an inland carrier and the inland carrier
        in his discretion agrees to do so, such Carriage shall be procured by the Carrier as agent only to the Merchant
        and Carrier shall have no liability for such carriage or the acts or omissions of such inland carrier.
      </p>
      <p>&nbsp;</p>
      <h2>6. Carrier&apos;s Responsibility: Multimodal Transport&nbsp;</h2>
      <p>
        Where the Carriage is Multimodal Transport, the Carrier undertakes to perform and/or in his own name to procure
        performance of the Carriage from the Place of Receipt or the Port of Loading, whichever is applicable, to the
        Port of Discharge or the Place of Delivery, whichever is applicable. The Carrier shall have no liability
        whatsoever for loss or damage to the Goods occurring before acceptance by the Carrier of custody of the Goods or
        after the Carrier tendering the Goods for delivery at the applicable points, and, the Carrier shall be liable
        for loss or damage occurring during the Carriage only to the extent set out below:
      </p>
      <p>6.1 Where the stage of Carriage where loss or damage occurred is not known.</p>
      <p>
        (a) The Carrier shall be relieved of liability for any loss or damage where such loss or damage was caused by:
      </p>
      <p>
        (i) an act or omission of the Merchant or Person acting on behalf of the Merchant other than the Carrier, his
        servant, agent or Subcontractor;
      </p>
      <p>(ii) compliance with instructions of any Person entitled to give them;</p>
      <p>(iii) insufficient or defective condition of packing or marks;</p>
      <p>
        (iv) handling, loading, stowage or unloading of the Goods by the Merchant or any Person acting on his behalf;
      </p>
      <p>(v) inherent vice of the Goods;</p>
      <p>(vi) strike, lock out, stoppage or restraint of labour, from whatever cause, whether partial or general;</p>
      <p>(vii) a nuclear incident;</p>
      <p>
        (viii) any cause or event which the Carrier could not avoid and the consequences whereof he could not prevent by
        the exercise of reasonable diligence.
      </p>
      <p>
        (b) The burden of proof that the loss or damage was due to a cause(s) or event(s) specified in clause 6.1 shall
        rest on the Carrier, but if there is any evidence the loss or damage is attributable to one or more cause or
        event specified in clause 6.1(a)(iii), (iv) or (v), it shall be presumed that it was so caused. The Merchant
        shall, however, be entitled to prove that the loss or damage was not, in fact, caused either wholly or partly by
        one or more of these causes or events.
      </p>
      <p>
        6.2 Where the stage of Carriage where the loss or damage occurred is known notwithstanding anything provided for
        in clause 6.1 and subject to clause 18, the liability of the Carrier in respect of such loss or damage shall be
        determined:
      </p>
      <p>
        (a) if the loss or damage is known to have occurred during Carriage by sea for shipments not to or from the
        United States of America or waterborne Carriage not in the U.S. by the Hague Rules Articles 1-8. These articles
        of the Hague Rules shall apply as a matter of contract; or
      </p>
      <p>
        (b) if the loss or damage is known to have occurred during any inland carriage not in the U.S. in accordance
        with the contract of carriage or tariffs of any inland carrier in whose custody the loss or damage occurred or
        in accordance with clauses 6.1 and clause 7.2(a), whichever imposes lesser liability on the Carrier; or
      </p>
      <p>
        (c) if the loss or damage is known to have occurred during Carriage by sea, for shipments to or from the United
        States of America, or waterborne Carriage in the United States of America or Carriage to or from a container
        yard or container freight station at Port of Loading before loading on the carrying vessel or at the Port of
        Discharge before delivery to the inland carrier, by the provisions of U.S. COGSA; or
      </p>
      <p>
        (d) if the loss or damage is known to have occurred during any inland carriage in the U.S., in accordance with
        the contract of carriage or tariffs of any inland carrier in whose custody the loss or damage occurred or U.S.
        COGSA whichever imposes lesser liability on the Carrier.
      </p>
      <p>&nbsp;</p>
      <h2>7. Compensation and Liability Provisions&nbsp;</h2>
      <p>
        7.1 Subject always to the Carrier’s right to limit liability as provided for herein, if the Carrier is liable
        for compensation in respect of loss of or damage to the Goods, such compensation shall be calculated by
        reference to the value of the Goods plus Freight and insurance if paid. The value of the Goods shall be
        determined with reference to the commercial invoice, customs declaration, any prevailing market price (at the
        place and time they are delivered or should have been delivered), production price or the reasonable value of
        Goods of the same kind and/or quality.
      </p>
      <p>7.2 Save as is provided in clause 7.3:</p>
      <p>
        (a) the Carrier’s liability shall in no event exceed 2 SDR per kilo of the gross weight of the Goods lost,
        damaged or in respect of which a claim of whatsoever nature arises unless clause 7.2(b) applies;
      </p>
      <p>
        (b) for shipments to or from the U.S., the liability of the Carrier and/or Vessel shall not exceed USD 500 per
        Package or customary freight unit, or any lesser limitation afforded per Clause 6.2.
      </p>
      <p>
        7.3 The Merchant agrees and acknowledges that the Carrier has no knowledge of the value of the Goods and higher
        compensation than that provided for in this bill of lading may be claimed only when, with the consent of the
        Carrier, (i) for multimodal shipments from the U.S. where U.S. inland carriage is undertaken, the Merchant
        elects to avoid any liability limitation provided herein by prepaying extra freight and opting for full
        liability under the Carmack Amendment by complying with the terms in Carrier’s Tariff; and (ii) in all other
        cases, the Shipper declares and the Carrier states the value of the Goods declared by the Shipper upon delivery
        to the Carrier has been stated in the box marked “Declared Value” on the reverse of this bill of lading and
        extra freight paid. In that case, the amount of the declared value shall be substituted for the limits laid down
        in this bill of lading. Any partial loss or damage shall be adjusted pro rata on the basis of such declared
        value.
      </p>
      <p>
        7.4 Nothing in this bill of lading shall operate to limit or deprive the Carrier of any statutory protection,
        defence, exception or limitation of liability authorised by any applicable laws, statutes or regulations of any
        country. The Carrier shall have the benefit of the said laws, statutes or regulations as if it were the owner of
        any carrying Vessel.
      </p>
      <p>&nbsp;</p>
      <h2>8. General</h2>
      <p>
        8.1 The Carrier does not undertake that the Goods or any documents relating thereto shall arrive or be available
        at any point or place at any stage during the Carriage or at the Port of Discharge or the Place of Delivery at
        any particular time or to meet any particular requirement of any licence, permission, sale contract, or credit
        of the Merchant or any market or use of the Goods and the Carrier shall under no circumstances whatsoever and
        howsoever arising be liable for any direct, indirect or consequential loss or damage caused by delay.&nbsp; If
        the Carrier should nevertheless be held legally liable for any such direct or indirect or consequential loss or
        damage caused by delay, such liability shall in no event exceed the Freight paid.
      </p>
      <p>
        8.2 Save as is otherwise provided herein, the Carrier shall in no circumstances be liable for direct or indirect
        or consequential loss or damage arising from any other cause whatsoever or for loss of profits.
      </p>
      <p>
        8.3 Once the Goods have been received by the Carrier for Carriage the Merchant shall not be entitled neither to
        impede, delay, suspend or stop or otherwise interfere with the Carrier’s intended manner of performance of the
        Carriage or the exercise of the liberties conferred by this bill of lading nor to instruct or require delivery
        of the Goods at other Port or Place than the Port of Discharge or Place of Delivery named on the reverse hereof
        or such other Port or Place selected by the Carrier in the exercise of the liberties herein, for any reason
        whatsoever. The Merchant shall indemnify the Carrier against all claims, liabilities, losses, damages, costs,
        delays, attorney fees and/or expenses caused to the Carrier, his Subcontractors, servants or agents or to any
        other cargo or to the owner of such cargo during the Carriage arising or resulting from any impediment, delay,
        suspension, stoppage or interference whatsoever in the Carriage of the Goods.
      </p>
      <p>
        8.4 These Terms and Conditions shall govern the responsibility of the Carrier in connection with or arising out
        of the supplying of a Container to the Merchant whether before, during or after the Carriage.
      </p>
      <p>&nbsp;</p>
      <h2>9. Notice of Loss, Time Bar&nbsp;</h2>
      <p>
        Unless notice of loss or damage and the general nature of such loss or damage be given in writing to the Carrier
        or his agents at the Place of Delivery (or Port of Discharge if no Place of Delivery is named on the reverse
        hereof) before or at the time of removal of the Goods or if the loss or damage is not apparent within three days
        thereafter, such removal shall be prima facie evidence of the delivery by the Carrier of the Goods as described
        in this bill of lading. In any event, the Carrier shall be discharged from all liability whatsoever in respect
        of the Goods unless suit is brought within one year after their delivery or the date when they should have been
        delivered.
      </p>
      <p>&nbsp;</p>
      <h2>10. Application of Terms and Conditions&nbsp;</h2>
      <p>
        These Terms and Conditions shall apply in any action against the Carrier for any loss or damage whatsoever and
        howsoever occurring (and, without restricting the generality of the foregoing, including delay, late delivery
        and/or delivery without surrender of this bill of lading) and whether the action be founded in contract,
        bailment or in tort and even if the loss, damage or delay arose as a result of unseaworthiness, negligence or
        fundamental breach of contract.
      </p>
      <p>&nbsp;</p>
      <h2>11. Shipper-Packed Containers</h2>
      <p>If a Container has not been packed by the Carrier:</p>
      <p>11.1 This bill of lading shall be a receipt only for such a Container;</p>
      <p>
        11.2 The Carrier shall not be liable for loss of or damage to the contents and the Merchant shall indemnify the
        Carrier against any injury, loss, damage, liability or expense whatsoever incurred by the Carrier if such loss
        of or damage to the contents and/or such injury, loss, damage, liability or expense has been caused by any
        matter beyond his control including, inter alia, without prejudice to the generality of this exclusion:
      </p>
      <p>(a) the manner in which the Container has been packed; or</p>
      <p>(b) the unsuitability of the Goods for carriage in Containers; or</p>
      <p>(c) the unsuitability or defective condition of the Container; or</p>
      <p>
        (d) the incorrect setting of any thermostatic, ventilation, or other special controls thereof, provided that, if
        the Container has been supplied by the Carrier, this unsuitability or defective condition could have been
        apparent upon reasonable inspection by the Merchant at or prior to the time the Container was packed.
      </p>
      <p>
        11.3 The Merchant is responsible for the packing and sealing of all shipper packed Containers and, if a shipper
        packed Container is delivered by the Carrier with any original seal intact, the Carrier shall not be liable for
        any shortage of Goods ascertained at delivery.
      </p>
      <p>
        11.4 The Shipper shall inspect Containers before packing them and the use of Containers shall be prima facie
        evidence of their being sound and suitable for use.
      </p>
      <p>&nbsp;</p>
      <h2>12. Perishable Cargo&nbsp;</h2>
      <p>
        12.1 Goods, including Goods of a perishable nature, shall be carried in ordinary Containers without special
        protection, services or other measures unless there is noted on the reverse side of this bill of lading that the
        Goods will be carried in a refrigerated, heated, electrically ventilated or otherwise specifically equipped
        Container or are to receive special attention in any way.&nbsp; The Merchant undertakes not to tender for
        Carriage any Goods which require refrigeration, ventilation or any other specialised attention without giving
        written notice of their nature and the required temperature or other setting of the thermostatic, ventilation or
        other special controls. If the above requirements are not complied with, the Carrier shall not be liable for any
        loss of or damage to the Goods howsoever arising.
      </p>
      <p>12.2 The Merchant should note that refrigerated Containers are not designed</p>
      <p>
        (a) to freeze down cargo which has not been presented for stuffing at or below its designated carrying
        temperature and the Carrier shall not be responsible for the consequences of cargo being presented at a higher
        temperature than that required for the Carriage; nor
      </p>
      <p>
        (b) to monitor and control humidity levels, albeit a setting facility exists, in that humidity is influenced by
        many external factors and the Carrier does not guarantee the maintenance of any intended level of humidity
        inside any Container.
      </p>
      <p>
        12.3 The term “apparent good order and condition” when used in this bill of lading with reference to goods which
        require refrigeration, ventilation or other specialised attention does not mean that the Goods, when received,
        were verified by the Carrier as being at the carrying temperature, humidity level or other condition designated
        by the Merchant.
      </p>
      <p>
        12.4 The Carrier shall not be liable for any loss of or damage to the Goods arising from latent defects,
        derangement, breakdown, defrosting, stoppage of the refrigerating, ventilating or any other specialised
        machinery, plant, insulation and/or apparatus of the Container, Vessel, conveyance and any other facilities,
        provided that the Carrier shall before and at the beginning of the Carriage exercise due diligence to maintain
        the Container supplied by the Carrier in an efficient state.
      </p>
      <p>&nbsp;</p>
      <h2>13. Inspection of Goods</h2>
      <p>
        The Carrier shall be entitled, but under no obligation, to open and/or scan any package or Container at any time
        and to inspect the contents. If it appears at any time that the Goods cannot safely or properly be carried or
        carried further, either at all or without incurring any additional expense or taking any measures in relation to
        the Container or the Goods, the Carrier may without notice to the Merchant (but as his agent only) take any
        measures and/or incur any reasonable additional expense to carry or to continue the Carriage thereof, and/or to
        sell or dispose of the Goods and/or to abandon the Carriage and/or to store them ashore or afloat, under cover
        or in the open, at any place, whichever the Carrier in his absolute discretion considers most appropriate, which
        sale, disposal, abandonment or storage shall be deemed to constitute due delivery under this bill of lading. The
        Merchant shall indemnify the Carrier against any reasonable additional expense so incurred. The Carrier in
        exercising the liberties contained in this clause shall not be under any obligation to take any particular
        measures and shall not be liable for any loss, delay or damage howsoever arising from any action or lack of
        action under this clause.
      </p>
      <p>&nbsp;</p>
      <h2>14. Description of Goods&nbsp;</h2>
      <p>
        14.1 This bill of lading shall be prima facie evidence of the receipt by the Carrier in apparent good order and
        condition, except as otherwise noted, of the total number of Containers or other packages or units indicated in
        the box entitled “Carrier’s Receipt” on the reverse side hereof.
      </p>
      <p>
        14.2 No representation is made by the Carrier as to the weight, contents, measure, quantity, quality,
        description, condition, marks, numbers or value of the Goods and the Carrier shall be under no responsibility
        whatsoever in respect of such description or particulars.
      </p>
      <p>
        14.3 The Shipper warrants to the Carrier that the particulars relating to the Goods as set out on the reverse
        hereof have been checked by the Shipper on receipt of this bill of lading and that such particulars, and any
        other particulars furnished by or on behalf of the Shipper, are adequate and correct. The Shipper also warrants
        that the Goods are lawful goods, and contain no contraband, drugs or other illegal substances or stowaways, and
        that the Goods will not cause loss, damage or expense to the Carrier, or to any other cargo.
      </p>
      <p>
        14.4 If any particulars of any letter of credit and/or import license and/or sales contract and/or invoice or
        order number and/or details of any contract to which the Carrier is not a party are shown on the face of this
        bill of lading, such particulars are included at the sole risk of the Merchant and for his convenience. The
        Merchant agrees that the inclusion of such particulars shall not be regarded as a declaration of value and in no
        way increases Carrier’s liability under this bill of lading.
      </p>
      <p>&nbsp;</p>
      <h2>15. Merchant&apos;s Responsibility&nbsp;</h2>
      <p>
        15.1 All of the Persons coming within the definition of Merchant in clause 1, including any principal of such
        Person, shall be jointly and severally liable to the Carrier for the due fulfilment of all obligations
        undertaken by the Merchant in this bill of lading.
      </p>
      <p>
        15.2 The Merchant shall be liable for and shall indemnify the Carrier against all loss, damage, delay, fines,
        attorney fees and/or expenses arising from any breach of any of the warranties in clause 14.3 or elsewhere in
        this bill of lading and from any other cause whatsoever in connection with the Goods for which the Carrier is
        not responsible.
      </p>
      <p>
        15.3 The Merchant shall comply with all regulations or requirements of customs, port and other authorities, and
        shall bear and pay all duties, taxes, fines, imposts, expenses or losses (including, without prejudice to the
        generality of the foregoing Freight for any additional Carriage undertaken) incurred or suffered by reason of
        any failure to so comply, or by reason of any illegal, incorrect or insufficient declaration, marking, numbering
        or addressing of the Goods, and shall indemnify the Carrier in respect thereof.
      </p>
      <p>
        15.4 If Containers supplied by or on behalf of the Carrier are unpacked by or for the Merchant, the Merchant is
        responsible for returning the empty Containers, with interiors clean, odour free and in the same condition as
        received, to the point or place designated by the Carrier, within the time prescribed. Should a Container not be
        returned in the condition required and/or within the time prescribed in the Tariff, the Merchant shall be liable
        for any detention, loss or expense incurred as a result thereof.
      </p>
      <p>
        15.5 Containers released into the care of the Merchant for packing, unpacking or any other purpose whatsoever
        are at the sole risk of the Merchant until redelivered to the Carrier. The Merchant shall indemnify the Carrier
        for all loss of and/or damage and/or delay to such Containers, and all liability claims from third parties or
        costs or fines resulting from Merchant’s use of such Containers. Merchants are deemed to be aware of the
        dimensions and capacity of any Containers released to them.
      </p>
      <p>&nbsp;</p>
      <h2>16. Freight, Expenses and Fees&nbsp;</h2>
      <p>
        16.1 Full Freight shall be payable based on particulars furnished by or on behalf of the Shipper. The Carrier
        may at any time open the Goods or Container(s) and, if the Shipper’s particulars are incorrect the Merchant and
        the Goods shall be liable for the correct Freight and any expenses incurred in examining, weighing, measuring,
        or valuing the Goods.
      </p>
      <p>
        16.2 Full Freight shall be considered completely earned on receipt of the Goods by the Carrier and shall be paid
        and non returnable in any event.
      </p>
      <p>
        16.3 All sums payable to the Carrier are due on demand and shall be paid in full in United States currency or,
        at the Carrier’s option, in its equivalent in the currency of the Port of Loading or of Discharge or the Place
        of Receipt or of Delivery or as specified in the Carrier’s Tariff.
      </p>
      <p>
        16.4 The Merchant’s attention is drawn to the stipulations concerning currency in which the Freight is to be
        paid, rate of exchange, devaluation, additional insurance premium and other contingencies relative to Freight in
        the applicable Tariff. In the event of any discrepancy between Freight (incl. charges etc) items in the bill of
        lading and any Carrier invoices, the latter shall prevail.
      </p>
      <p>
        16.5 All Freight shall be paid without any set off, counter claim, deduction or stay of execution at latest
        before delivery of the Goods.
      </p>
      <p>
        16.6 If the Merchant fails to pay the Freight when due he shall be liable also for payment of service fee,
        interest due on any outstanding and/or overdue sum reasonable attorney fees and expenses incurred in collecting
        any sums due to the Carrier. Payment of Freight and charges to a freight forwarder, broker or anyone other than
        the Carrier or its authorised agent, shall not be deemed payment to the Carrier and shall be made at the
        Merchant’s sole risk.
      </p>
      <p>
        16.7 Despite the acceptance by the Carrier of instructions to collect Freight, duties, fees, demurrage/detention
        and costs and expenses from the shipper or consignee or any other Person, then, in the absence of evidence of
        payment (for whatever reason) by such shipper or consignee or other Person when due, the Merchant shall remain
        responsible for and for the payment of such Freight, duties, fees, demurrage/detention and costs and expenses on
        receipt of evidence of demand within the meaning of clause 16.3.
      </p>
      <p>
        16.8 If the Carrier, at its sole discretion, grants credit on any sums payable to the Carrier, the terms and
        conditions applicable to any credit (Credit terms) are available from the Carrier or his authorised agents or at{" "}
        <a href="https://terms.maersk.com/credit">https://terms.maersk.com/credit</a>. The applicable Credit terms will
        automatically apply to any granting of credit by the Carrier, unless otherwise agreed by the Carrier.
      </p>
      <p>&nbsp;</p>
      <h2>17. Lien&nbsp;</h2>
      <p>
        The Carrier shall have a lien on the Goods and any documents relating thereto for all sums payable to the
        Carrier under this contract and for general average contributions to whomsoever due. The Carrier shall also have
        a lien against the Merchant on the Goods and any document relating thereto for all sums due by the Merchant to
        the Carrier under any other contract whether or not related to this Carriage. The Carrier may exercise his lien
        at any time and any place in his sole discretion, whether the contractual Carriage is completed or not. In any
        event any lien shall extend to cover the cost of recovering any sums due and for that purpose the Carrier shall
        have the right to sell the Goods by public auction or private treaty, without notice to the Merchant. The
        Carrier’s lien shall survive delivery of the Goods.
      </p>
      <p>&nbsp;</p>
      <h2>18. Optional Stowage, Deck Cargo and Livestock</h2>
      <p>18.1 The Goods may be packed by the Carrier in Containers and consolidated with other goods in Containers.</p>
      <p>
        18.2 Goods whether packed in Containers or not, may be carried on deck or under deck without notice to the
        Merchant. The Carrier shall not be required to note, mark or stamp on the bill of lading any statement of such
        on deck carriage. Save as provided in clause 18.3, such Goods (except livestock) carried on or under deck and
        whether or not stated to be carried on deck shall participate in general average and shall be deemed to be
        within the definition of goods for the purpose of the Hague Rules or US COGSA and shall be carried subject to
        such Rules or Act, whichever is applicable.
      </p>
      <p>
        18.3 Goods (not being Goods stowed in Containers other than flats or pallets) which are stated herein to be
        carried on deck and livestock, whether or not carried on deck, are carried without responsibility on the part of
        the Carrier for loss or damage of whatsoever nature or delay arising during the Carriage whether caused by
        unseaworthiness or negligence or any other cause whatsoever and neither the Hague Rules nor US COGSA shall
        apply.
      </p>
      <p>&nbsp;</p>
      <h2>19. Methods and Routes of Carriage&nbsp;</h2>
      <p>19.1 The Carrier may at any time and without notice to the Merchant:</p>
      <p>(a) use any means of transport or storage whatsoever;</p>
      <p>
        (b) transfer the Goods from one conveyance to another including transshipping or carrying the same on a Vessel
        other than the Vessel named on the reverse hereof or by any other means of transport whatsoever and even though
        transshipment or forwarding of the Goods may not have been contemplated or provided for herein;
      </p>
      <p>
        (c) unpack and remove the Goods which have been packed into a Container and forward them via Container or
        otherwise;
      </p>
      <p>
        (d) sail without pilots, proceed via any route, (whether or not the nearest or most direct or customary or
        advertised route) at any speed and proceed to, return to and stay at any port or place whatsoever (including the
        Port of Loading herein provided) once or more often, and in any order in or out of the route or in a contrary
        direction to or beyond the port of discharge once or more often;
      </p>
      <p>
        (e) load and unload the Goods at any place or port (whether or not any such port is named on the reverse hereof
        as the Port of Loading or Port of Discharge) and store the Goods at any such port or place;
      </p>
      <p>
        (f) &nbsp;comply with any orders or recommendations given by any government or authority or any Person or body
        acting purporting to act as or on behalf of such government or authority or having under the terms of the
        insurance on any conveyance employed by the Carrier the right to give orders or directions.
      </p>
      <p>
        19.2 The liberties set out in clause 19.1 may be invoked by the Carrier for any purpose whatsoever whether or
        not connected with the Carriage of the Goods, including but not limited to loading or unloading other goods,
        bunkering or embarking or disembarking any person(s), undergoing repairs and/or drydocking, towing or being
        towed, assisting other vessels, making trial trips and adjusting instruments. Anything done or not done in
        accordance with clause 19.1 or any delay arising therefrom shall be deemed to be within the contractual Carriage
        and shall not be a deviation.
      </p>
      <p>&nbsp;</p>
      <h2>20. Matters Affecting Performance&nbsp;</h2>
      <p>
        If at any time Carriage is or is likely to be affected by any hindrance, risk, danger, delay, difficulty or
        disadvantage of whatsoever kind and howsoever arising which cannot be avoided by the exercise of reasonable
        endeavours, (even though the circumstances giving rise to such hindrance, risk, danger, delay, difficulty or
        disadvantage existed at the time this contract was entered into or the Goods were received for Carriage) the
        Carrier may at his sole discretion and without notice to the Merchant and whether or not the Carriage is
        commenced either:
      </p>
      <p>
        (a) Carry the Goods to the contracted Port of Discharge or Place of Delivery, whichever is applicable, by an
        alternative route to that indicated in this bill of lading or that which is usual for Goods consigned to that
        Port of Discharge or Place of Delivery. If the Carrier elects to invoke the terms of this clause 20(a) then,
        notwithstanding the provisions of clause 19 hereof, he shall be entitled to charge such additional Freight as
        the Carrier may determine; or
      </p>
      <p>
        (b) Suspend the Carriage of the Goods and store them ashore or afloat under these Terms and Conditions and
        endeavour to forward them as soon as possible, but the Carrier makes no representations as to the maximum period
        of suspension. If the Carrier elects to invoke the terms of this clause 20(b) then, notwithstanding the
        provisions of clause 19 hereof, he shall be entitled to charge such additional Freight and costs as the Carrier
        may determine; or
      </p>
      <p>
        (c) Abandon the Carriage of the Goods and place them at the Merchant’s disposal at any place or port, which the
        Carrier may deem safe and convenient, whereupon the responsibility of the Carrier in respect of such Goods shall
        cease. The Carrier shall nevertheless be entitled to full Freight on the Goods received for the Carriage, and
        the Merchant shall pay any additional costs incurred by reason of the abandonment of the Goods. If the Carrier
        elects to use an alternative route under clause 20(a) or to suspend the Carriage under clause 20(b) this shall
        not prejudice his right subsequently to abandon the Carriage.
      </p>
      <p>&nbsp;</p>
      <h2>21. Dangerous Goods&nbsp;</h2>
      <p>
        21.1 No Goods which are or which may become of a dangerous, noxious, hazardous, flammable, or damaging nature
        (including radioactive material) or which are or may become liable to damage any Persons or property whatsoever,
        and whether or not so listed in any official or unofficial, international or national code, convention, listing
        or table shall be tendered to the Carrier for Carriage without previously giving written notice of their nature,
        character, name, label and classification (if applicable) to the Carrier and obtaining his consent in writing
        and without distinctly marking the Goods and the Container or other covering on the outside so as to indicate
        the nature and character of any such Goods and so as to comply with any applicable laws, regulations or
        requirements. If any such Goods are delivered to the Carrier without obtaining his consent and/or such marking,
        or if in the opinion of the Carrier the Goods are or are liable to become of a dangerous, noxious, hazardous,
        flammable or damaging nature, they may at any time or place be unloaded, destroyed, disposed of, abandoned or
        rendered harmless without compensation to the Merchant and without prejudice to the Carrier’s right to Freight.
      </p>
      <p>
        21.2 The Merchant warrants that such Goods are packed in a manner adequate to withstand the risks of Carriage
        having regard to their nature and in compliance with all laws, regulations or requirements which may be
        applicable to the Carriage.
      </p>
      <p>
        21.3 The Merchant shall indemnify the Carrier against all claims, liabilities, loss, damage, delay, costs, fines
        and/or expenses arising in consequence of the Carriage of such Goods, and/or arising from breach of any of the
        warranties in clause 21.2 including any steps taken by the Carrier pursuant to clause 21.1 whether or not the
        Merchant was aware of the nature of such Goods.
      </p>
      <p>
        21.4 Nothing contained in this clause shall deprive the Carrier of any of his rights provided for elsewhere.
      </p>
      <p>&nbsp;</p>
      <h2>22. Notification, Discharge and Delivery</h2>
      <p>
        22.1 Any mention in this bill of lading of parties to be notified of the arrival of the Goods is solely for
        information of the Carrier. Failure to give such notification shall not involve the Carrier in any liability nor
        relieve the Merchant of any obligation hereunder.
      </p>
      <p>
        22.2 The Merchant shall take delivery of the Goods within the time provided for in the Carrier’s applicable
        Tariff. If the Merchant fails to do so, the Carrier may without notice unpack the Goods if packed in containers
        and/or store the Goods ashore, afloat, in the open or under cover at the sole risk of the Merchant. Such storage
        shall constitute due delivery hereunder, and thereupon all liability whatsoever of the Carrier in respect of the
        Goods or that part thereof shall cease and the costs of such storage shall forthwith upon demand be paid by the
        Merchant to the Carrier.
      </p>
      <p>
        22.3 If the Carrier is obliged to discharge the Goods into the hands of any customs, port or other authority,
        such discharge shall constitute due delivery of the Goods to the Merchant under this bill of lading.
      </p>
      <p>
        22.4 If the Goods are unclaimed within a reasonable time or whenever in the Carrier’s opinion the Goods are
        likely to deteriorate, decay or become worthless, or incur charges whether for storage or otherwise in excess of
        their value, the Carrier may at his discretion and without prejudice to any other rights which he may have
        against the Merchant, without notice and without any responsibility attaching to him sell, abandon or otherwise
        dispose of the Goods at the sole risk and expense of the Merchant and apply any proceeds of sale in reduction of
        the sums due to the Carrier by the Merchant.
      </p>
      <p>
        22.5 Refusal by the Merchant to take delivery of the Goods in accordance with the terms of this clause and/or to
        mitigate any loss or damage thereto shall constitute a waiver by the Merchant to the Carrier of any claim
        whatsoever relating to the Goods or the Carriage thereof.
      </p>
      <p>&nbsp;</p>
      <h2>23. Both to Blame Collision Clause&nbsp;</h2>
      <p>
        The Both to Blame Collision and New Jason clauses published and/or approved by BIMCO and obtainable from the
        Carrier or his agent upon request are hereby incorporated herein.
      </p>
      <p>&nbsp;</p>
      <h2>24. General Average and Salvage&nbsp;</h2>
      <p>
        24.1 General average to be adjusted at any port or place at the Carrier’s option and to be settled according to
        the York Antwerp Rules 1994, this covering all Goods carried on or under deck. General average on a Vessel not
        operated by the Carrier shall be adjusted according to the requirements of the operator of that Vessel.
      </p>
      <p>
        24.2 Such security including a cash deposit as the Carrier may deem sufficient to cover the estimated
        contribution of the Goods and any salvage and special charges thereon, shall, if required, be submitted to the
        Carrier prior to delivery of the Goods. The Carrier shall be under no obligation to exercise any lien for
        general average contribution due to the Merchant.
      </p>
      <p>
        24.3 Should the Carrier in its own discretion choose to post general average and/or salvage security due from
        cargo interests or pay general average and/or salvage contributions due from cargo interests, the Merchant
        hereby assigns to the Carrier all his rights in respect of the general average and/or salvage.
      </p>
      <p>
        24.4 If a salving ship is owned or operated by the Carrier, salvage shall be paid for as fully as if the said
        salving ship belonged to strangers.
      </p>
      <p>&nbsp;</p>
      <h2>25. Variation of the Contract and Validity&nbsp;</h2>
      <p>
        25.1 No servant or agent of the Carrier shall have the power to waive or vary any Terms and Conditions unless
        such waiver or variation is in writing and is specifically authorised or ratified in writing by the Carrier.
      </p>
      <p>
        25.2 In the event that anything herein contained is inconsistent with any applicable international convention or
        national law, which cannot be departed from by private contract, the provisions hereof shall to the extent of
        such inconsistency but no further be null and void.
      </p>
      <p>&nbsp;</p>
      <h2>26. Law and Jurisdiction&nbsp;</h2>
      <p>
        For shipments to or from the U.S. any dispute relating to this bill of lading shall be governed by U.S. law and
        the United States Federal Court of the Southern District of New York is to have exclusive jurisdiction to hear
        all disputes in respect thereof. In all other cases, this bill of lading shall be governed by and construed in
        accordance with English law and all disputes arising hereunder shall be determined by the English High Court of
        Justice in London to the exclusion of the jurisdiction of the courts of another country. Alternatively and at
        the Carrier’s sole option, the Carrier may commence proceedings against the Merchant at a competent court of a
        place of business of the Merchant.
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

const Section3 = ({ document, editable, handleObfuscation }: SectionProps): JSX.Element => {
  const {
    carrierName,
    carrierReceipt,
    placeOfIssueBL,
    numberOfOriginalBL,
    dateOfIssueBL,
    carrierSignature,
    shippedOnBoardDate,
  } = document;

  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2 h-24">{smallText("Freight & Charges")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Rule")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Unit")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Currency")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Prepaid")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Collect")}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText(
                    "Carrier's Receipt (see clause 1 and 14). Total number of containers or packages received by Carrier."
                  )}
                  <p data-testid="carrier-receipt">
                    <RedactableValue
                      value={carrierReceipt}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`carrierReceipt`)}
                      iconRedact={<IconRedact />}
                    />
                  </p>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Place of Issue of B/L")}
                  <p data-testid="place-of-issue-bl">
                    <RedactableValue
                      value={placeOfIssueBL}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`placeOfIssueBL`)}
                      iconRedact={<IconRedact />}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Number & Sequence of Original B(s)/L")}
                  <p data-testid="number-of-original-bl">
                    {numberOfOriginalBL ? (
                      <RedactableValue
                        value={numberOfOriginalBL}
                        noValueMessage=" "
                        redactedMessage=" "
                        editable={editable}
                        onRedactionRequested={() => handleObfuscation(`numberOfOriginalBL`)}
                        iconRedact={<IconRedact />}
                      />
                    ) : (
                      "ONE/1"
                    )}
                  </p>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Date of Issue of B/L")}
                  <p data-testid="date-of-issue-bl">
                    <RedactableValue
                      value={dateOfIssueBL}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`dateOfIssueBL`)}
                      iconRedact={<IconRedact />}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Declared Value (see clause 7.3)")}</div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Shipped on Board Date (Local Time)")}
                  <p data-testid="shipped-on-board-date">
                    <RedactableValue
                      value={shippedOnBoardDate}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`shippedOnBoardDate`)}
                      iconRedact={<IconRedact />}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              "SHIPPED, as far as ascertained by reasonable means of checking, in apparent good order and condition unless otherwise stated herein, the total number or quantity of Containers or other packages or units indicated in the box entitled \"Carrier's Receipt\" for carriage from the Port of Loading (or the Place of Receipt, if mentioned above) to the Port of Discharge (or the Place of Delivery, if mentioned above), such carriage being always subject to the terms, rights, defences, provisions, conditions, exceptions, limitations, and liberties hereof (INCLUDING ALL THOSE TERMS AND CONDITIONS ON THE REVERSE HEREOF NUMBERED 1-26 AND THOSE TERMS AND CONDITIONS CONTAINED IN THE CARRIER'S APPLICABLE TARIFF) and the Merchant's attention is drawn in particular to the Carrier's liberties in respect of on deck stowage (see clause 18) and the carrying vessel (see clause 19). Where the bill of lading is non-negotiable the Carrier may give delivery of the Goods to the named consignee upon reasonable proof of identity and without requiring surrender of an original bill of lading. Where the bill of lading is negotiable, the Merchant is obliged to surrender one original, duly endorsed, in exchange for the Goods. The Carrier accepts a duty of reasonable care to check that any such document which the Merchant surrenders as a bill of lading is genuine and original. If the Carrier complies with this duty, it will be entitled to deliver the Goods against what it reasonably believes to be a genuine and original bill of lading, such delivery discharging the Carrier’s delivery obligations. In accepting this bill of lading, any local customs or privileges to the contrary notwithstanding, the Merchant agrees to be bound by all Terms and Conditions stated herein whether written, printed, stamped or incorporated on the face or reverse side hereof, as fully as if they were all signed by the Merchant. IN WITNESS WHEREOF the number of original Bills of Lading stated on this side have been signed and wherever one original Bill of Lading has been surrendered any others shall be void."
            )}
            <div className="text-center my-4">
              {smallStrongText(`Signed for the Carrier Maersk A/S`)}
              {carrierSignature && (
                <img data-testid="carrier-signature" className="w-[150px] mx-auto" src={carrierSignature} />
              )}
            </div>
            <hr />
            <div className="text-center mt-2">{smallStrongText(`${carrierName || ""}`)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = ({ document, editable, handleObfuscation }: SectionProps): JSX.Element => {
  const { packages } = document;

  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-3/5 border-black border">
          <div className="p-2">
            {smallText("Kind of Packages: Description of goods, Marks and Numbers: Container No./Serial No.")}
            {packages && (
              <div>
                {packages.map((pkg, index) => (
                  <p key={index}>{pkg.description}</p>
                ))}
              </div>
            )}
            <p style={{ fontSize: "0.8em" }} className="mt-2">
              Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
              clause 14)
            </p>
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            {smallText("Weight")}
            {packages && (
              <div>
                {packages.map((pkg, index) => (
                  <p key={index}>{pkg.weight}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            {smallText("Measurement")}
            {packages && (
              <div>
                {packages.map((pkg, index) => (
                  <p key={index}>{pkg.measurement}</p>
                ))}
              </div>
            )}
            <RedactableValue
              value={packages}
              isValueHidden
              editable={editable}
              onRedactionRequested={() => handleObfuscation(`packages`)}
              iconRedact={<IconRedact />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section1 = ({ document, editable, handleObfuscation }: SectionProps): JSX.Element => {
  const {
    logo,
    scac,
    blNumber,
    shipper,
    consignee,
    notifyParty,
    vessel,
    voyageNo,
    placeOfReceipt,
    portOfLoading,
    portOfDischarge,
    placeOfDelivery,
  } = document;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            {logo && <img data-testid="logo" className="w-[150px]" src={logo} />}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex h-full">
            <div className="w-2/3 border-black border">
              <div className="p-2">
                <p>
                  <strong>BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT</strong>
                </p>
              </div>
            </div>
            <div className="w-1/3 border-black border">
              <div className="p-2 border-black border-b-2">
                <p>
                  SCAC{" "}
                  <strong>
                    <RedactableValue
                      value={scac}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`scac`)}
                      iconRedact={<IconRedact />}
                    />
                  </strong>
                </p>
              </div>
              <div className="p-2">
                B/L No
                <p data-testid="blNumber">
                  <strong className="break-all">
                    <RedactableValue
                      value={blNumber}
                      noValueMessage=" "
                      redactedMessage=" "
                      editable={editable}
                      onRedactionRequested={() => handleObfuscation(`blNumber`)}
                      iconRedact={<IconRedact />}
                    />
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Shipper</div>
            <div className="p-4">
              {shipper && (
                <>
                  <p>{shipper.name}</p>
                  <p>{shipper.address.street}</p>
                  <p>{shipper.address.country}</p>
                </>
              )}
              <RedactableValue
                value={shipper}
                isValueHidden
                editable={editable}
                onRedactionRequested={() => handleObfuscation(`shipper`)}
                iconRedact={<IconRedact />}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2 border-black border-b-2">
            {smallText("Booking No")}
            <p>
              <RedactableValue
                editable={editable}
                value={blNumber}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`blNumber`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
          <div className="p-2 border-black border-b-2">{smallText("Export references")}</div>
          <div className="p-2">
            {smallText(
              "Onward inland routing (Not part of Carriage as defined in clause 1. For account and risk of Merchant)"
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(`Consignee (negotiable is consiged \"to order\", \"to order of\" a named Person or \"to
              order of bearer\")`)}
            <div className="p-4">
              <p>TO THE ORDER OF</p>
              {consignee && <p>{consignee.name}</p>}
              <RedactableValue
                value={consignee}
                isValueHidden
                editable={editable}
                onRedactionRequested={() => handleObfuscation(`consignee`)}
                iconRedact={<IconRedact />}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(`Notify Party (see clause 22)`)}
            {notifyParty && <p className="p-4">{notifyParty.name}</p>}
            <RedactableValue
              value={notifyParty}
              isValueHidden
              editable={editable}
              onRedactionRequested={() => handleObfuscation(`notifyParty`)}
              iconRedact={<IconRedact />}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Vessel (see clause 1 + 19)`)}
            <p className="break-words">
              <RedactableValue
                editable={editable}
                value={vessel}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`vessel`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Voyage No.`)}
            <p className="break-all">
              <RedactableValue
                editable={editable}
                value={voyageNo}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`voyageNo`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              `  Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)`
            )}
            <p className="break-all">
              <RedactableValue
                editable={editable}
                value={placeOfReceipt}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`placeOfReceipt`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Port of Loading`)}
            <p className="break-words">
              <RedactableValue
                editable={editable}
                value={portOfLoading}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`portOfLoading`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            {smallText(`Port of Discharge`)}
            <p className="break-words">
              <RedactableValue
                editable={editable}
                value={portOfDischarge}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`portOfDischarge`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              `Place of Delivery. Applicable only when document used as Multimodal Transport B/L (see clause 1)`
            )}
            <p className="break-all">
              <RedactableValue
                editable={editable}
                value={placeOfDelivery}
                noValueMessage=" "
                redactedMessage=" "
                onRedactionRequested={() => handleObfuscation(`placeOfDelivery`)}
                iconRedact={<IconRedact />}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillOfLadingMaerskTpacTemplate: FunctionComponent<TemplateProps<BillOfLadingMaerskTpacSchema>> = ({
  document,
  handleObfuscation,
}) => {
  const [editable, setEditable] = useState(false);
  const documentData = getDocumentData(document) as BillOfLadingMaerskTpacDocument;
  const qrCodeUrl = documentData?.links?.self.href;
  const props = { document: documentData, editable, handleObfuscation };
  return (
    <Wrapper data-testid="bill-of-lading-maersk-pilot-template">
      <PrivacyFilter editable={editable} onToggleEditable={() => setEditable(!editable)} />
      <div className="mb-8">{Section1(props)}</div>
      <div className="text-center">
        <p>
          <strong>PARTICULARS FURNISHED BY SHIPPER</strong>
        </p>
      </div>
      <div className="mb-8">{Section2(props)}</div>
      <div className="mb-8">{Section3(props)}</div>
      <div className="break-before-page">{Terms()}</div>
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
