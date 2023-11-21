import { OAv4 as v4 } from "@tradetrust-tt/tradetrust";
import { BrochureSchema } from "./types";

export const BrochureSampleV4: BrochureSchema = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/4.0/alpha-context.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  validFrom: "2023-08-28T10:00:00+08:00",
  name: "TradeTrust Brochure",
  issuer: {
    id: "did:ethr:0xe93502ce1A52C1c0e99A2eB6666263EA53dB0a5e",
    type: "OpenAttestationIssuer",
    name: "TradeTrust Demo",
    identityProof: {
      identityProofType: v4.IdentityProofType.DNSDid,
      identifier: "demo.tradetrust.io",
    },
  },
  credentialStatus: {
    type: "OpenAttestationCredentialStatus",
    credentialStatusType: v4.CredentialStatusType.None,
  },
  renderMethod: {
    type: "OpenAttestationRenderMethod",
    renderMethodType: v4.RenderMethodType.EmbeddedRenderer,
    name: "W3C_BROCHURE",
    url: "http://localhost:3000",
  },
  credentialSubject: {
    shared: {
      tradeTrust: {
        description:
          "TradeTrust – A digital utility that comprises a set of globally-accepted standards and frameworks that connects governments and businesses to a public blockchain to enable trusted interoperability and exchanges of electronic trade documents across digital platforms.",
      },
      openAttestation: {
        description: "OpenAttestation – An Open-Source Framework for Verifiable Credentials",
      },
    },
    page1: {
      header:
        "Verifiable Credentials for Cross-Border Trade and Other Use Cases: Proposed Contributions by Singapore Infocomm Media Development Authority and Singapore Government Technology Agency",
      contents: [
        {
          subheader: "Current challenges of cross-border trade documents exchanges",
          bodyAsList: [
            "Current cross-border trade documentation spans many documents and processes, and is a manual, time-consuming, and resource-intensive process for all stakeholders. The paper-based processes are still practiced today as there is currently no easy way to verify the accuracy and authenticity of the supporting trade documents via digital means. This results in inefficiency and delay as time required to process the paper-based documents for clearance may far exceed the actual time of physical movement of goods. According to a study",
            " by McKinsey in 2022, documentation for a single shipment can require up to 50 sheets of paper that are exchanged with up to 30 different stakeholders.",
          ],
        },
        {
          subheader: "How does TradeTrust address these challenges",
          body: "To address these inefficiencies, we have developed TradeTrust. TradeTrust, which is built upon OpenAttestation framework, comprises globally accepted standards and frameworks that allow governments and businesses to issue, verify and effect title transfer of electronic documents across different digital platforms seamlessly. TradeTrust can help to protect the trustworthiness of digital documents using cryptography and decentralised identifier (DID) for the verification of their authenticities and their provenances.",
        },
        {
          subheader: "What documents can TradeTrust support in their digitalisation",
          body: "As a framework, TradeTrust is designed and developed to support the digitalization of two categories of documents used in Cross-Border Trade and Trade Financing processes. The first category is known as the Verifiable Document where the integrity or the trustworthiness of the document can be verified. Examples of such documents include the Certificates of Origin, Commercial Invoices and Packing Lists etc. The second category is Transferable document (or document of title) where it confers title ownership to an asset and the ownership can be transferred from one party to another. Examples of such documents include the negotiable Bill of Lading, Bill of Exchange, Warehouse Receipts and Promissory Notes etc. An electronic Bill of Lading (eBL) that is issued using the TradeTrust framework can be transacted by various commercial stakeholders in a fully decentralised manner, eliminating the need for all parties to be on a common digital platform.",
        },
        {
          subheader:
            "How are Selective Redaction and Decentralised Renderer functions used in TradeTrust and why are they useful",
          bodyAsList: [
            "While TradeTrust facilitates the trusted exchange of digital documents across the different parties in cross-border trade processes, it is important to ensure that the holder of these documents have control over what information can be shared with other users. To support such flexibilities, TradeTrust adopts the",
            " method and allows the holder of the digital trade document to redact information that are commercially sensitive (such as suppliers' or products' pricing) before sharing it with the next receiving party. TradeTrust also supports the concept of",
            " of digital documents in order to allow the document issuers flexibility in designing the rendering functions according to their preference. The decentralised approach also helps to mitigate the risks of single point of failure (SPOF) when all documents rendering functions are consolidated under a common hardware infrastructure.",
          ],
          bolded: [" Selective Redaction", " Decentralised Renderer"],
        },
      ],
      footnote:
        "https://www.mckinsey.com/industries/travel-logistics-and-infrastructure/our-insights/the-multi-billion-dollar-paper-jam-unlocking-trade-by-digitalizing-documentation",
    },
    page2: {
      contents: [
        {
          subheader: "Introduction",
          body: "As the world moves away from paper documents and towards digital documents, it is important to ensure that digital documents are resistant to tampering and trust is preserved. OpenAttestation is an open-source framework developed by the Singapore Government Technology Agency to simplify the endorsement and verification of digital documents. In production since 2018, OpenAttestation has been implemented in various areas such as academic credentials, healthcare records, and cross-border trade.",
        },
        {
          body: "The key features of OpenAttestation include:",
          listItems: [
            {
              name: "Document integrity:",
              description:
                "OpenAttestation ensures that the content of the document has not been modified since the document’s creation, with the exception of data omitted using the built-in selective redaction mechanism.",
            },
            {
              name: "Issuance status:",
              description:
                "OpenAttestation checks that the document has been issued and that its issuance status is in good standing, i.e. it has not been revoked, for example. Currently, OpenAttestation supports two ways to issue documents: Decentralised Identifier (DID) Signing and Blockchain Smart Contracts.",
            },
            {
              name: "Issuance identity:",
              description:
                "OpenAttestation checks and returns the identity of the issuer primarily through the Domain Name System (DNS). It verifies that the issuing party in the document has provided some sort of proof that it is the same party as claimed by, for example, proving ownership over a domain by the ability to create a DNS record.",
            },
          ],
        },
        {
          bodyAsList: [
            "OpenAttestation has been listed in the",
            " registry by the",
            ". DPGA is a multistakeholder initiative supported by the Norwegian Agency for Development Cooperation (Norad), United Nations Development Programme (UNDP), and UNICEF.",
          ],
          links: [
            {
              title: " Digital Public Goods",
              url: "https://digitalpublicgoods.net/registry/openattestation.html",
            },
            {
              title: " Digital Public Goods Alliance (DPGA)",
              url: "https://digitalpublicgoods.net/who-we-are/",
            },
          ],
        },
        {
          subheader: "Alignment with W3C Verifiable Credentials Data Model",
          bodyAsList: [
            "OpenAttestation is aligned with the W3C Verifiable Credentials Data Model. As a framework with real-world implementation and production systems, our team hopes that OpenAttestation documents will be interoperable with other implementations of verifiable credentials and their related systems, including verifiers and wallets. We also hope to support greater adoption of verifiable credentials. To this end, we have recently launched OpenAttestation v4 [",
            "] which improves on interoperability with the W3C Verifiable Credentials Data Model [",
            "].",
          ],
          links: [
            {
              url: "https://go.gov.sg/oa-v4",
            },
            {
              url: "https://www.w3.org/TR/vc-data-model/",
            },
          ],
        },
      ],
    },
    page3: {
      contents: [
        {
          subheader: "Proposed Contributions to W3C Verifiable Credentials Working Group",
          body: "To improve interoperability and adoption, our team proposes the following contributions to the W3C Verifiable Credentials Working Group:",
        },
        {
          listItems: [
            {
              name: "OpenAttestationMerkleProof2018 Signature Method for Selective Redaction",
              descriptionAsList: [
                "Selective redaction is a desirable property of verifiable credentials. OpenAttestation implements a lossy progressive selective redaction scheme, which allows it to be used in applications where a verifiable credential is passed along a chain of multiple verifiers and where privacy and data minimisation techniques are desired and/or required.",
                "This proof method can be understood as a “hash of hashes” in which each property of the credential is salted and hashed. The output hashes are sorted, stored in an array, and hashed again to derive the target hash, which is akin to a digital fingerprint of the credential. To redact a property in the OpenAttestation Verifiable Credential, the obfuscated data is replaced by its corresponding derivated hash. Obfuscation does not invalidate the proof property as the target hash is computed over all hashed key-value pairs in the credential, including obfuscated property hashes.",
                "The Verifiable Credentials Data Model is proof format agnostic and does not normatively require any particular digital proof or signature format. As the OpenAttestationMerkleProof2018 Signature Method is being actively utilised by OpenAttestation implementations, our team believes that documenting the OpenAttestationMerkleProof2018 Signature Method as part of the Verifiable Credentials Data Model would be beneficial to implementers.",
              ],
            },
            {
              name: "Decentralised Renderer",
              descriptionAsList: [
                "While the claims contained within verifiable credentials are machine-readable, they are not by default presented in a human-readable form. OpenAttestation implements a decentralised rendering protocol that presents the OpenAttestation verifiable credential in a human-readable format. Issuers create their own document schema and custom templates to render their OpenAttestation verifiable credentials. This decentralised renderer is publicly  hosted as an endpoint.",
                "When verifiers verify the OpenAttestation verifiable credential online, the OpenAttestation viewer then loads the decentralised renderer and uses it to display the OpenAttestation verifiable credential. This protocol enables document issuers to style their documents without code change to the different implementation of the document viewer, while managing the size of the credential.",
              ],
            },
            {
              name: "Paper-Friendly Verifiable Credentials",
              description:
                "OpenAttestation enables paper-friendly verifiable credentials that are suitable for use cases with uneven technological maturity, such as long cross-border supply chains. OpenAttestation verifiable credentials can be issued with a QR code which, when scanned with QR code reader such as a mobile phone, will direct the viewer to the OpenAttestation document viewer and load the OpenAttestation verifiable credential using the decentralised renderer.",
            },
          ],
        },
      ],
    },
    page4: {
      contents: [
        {
          subheader: "Use Cases",
          body: "OpenAttestation has numerous use cases across a variety of sectors:",
        },
        {
          listItems: [
            {
              name: "TradeTrust",
              description:
                " builds upon the OpenAttestation framework to verify the authenticity and source of trade documents and for performing title ownership transfers of electronic transferable records.",
            },
            {
              name: "OpenCerts",
              description:
                " leverages the OpenAttestation framework to provide a convenient way for educational institutions to issue academic certificates, and for students to share their qualifications with prospective employers. It is used by all major post-secondary education institutions in Singapore.",
            },
            {
              name: "HealthCerts",
              descriptionAsList: [
                "During the COVID-19 pandemic, OpenAttestation was used to issue tamper-proof pre-departure test and vaccination certificates (“",
                "”) for cross-border travel.",
              ],
            },
            {
              name: "ACRA",
              description:
                "Singapore’s Accounting and Corporate Regulatory Authority uses OpenAttestation to Issue Official Business Profiles and Certificates to registered companies.",
            },
            {
              name: "ICA",
              description:
                "Singapore’s Immigrations and Checkpoints Authority uses OpenAttestation to issue long-term visitor visas.",
            },
            {
              name: "EVs",
              description:
                "Start-ups have used OpenAttestation to issue transaction information about electric vehicle charging and carbon credits.",
            },
          ],
          links: [
            {
              title: "TradeTrust",
              url: "https://www.tradetrust.io/",
            },
            {
              title: "OpenCerts",
              url: "https://www.opencerts.io/",
            },
            {
              title: "HealthCerts",
              url: "https://www.healthcerts.gov.sg/",
            },
          ],
        },
      ],
      footer: {
        qrUrl:
          "https://tradetrust.io/?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fgallery.openattestation.com%2Fstatic%2Fdocuments%2Fw3c-brochure.json%22%2C%22permittedActions%22%3A%5B%22VIEW%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Ftradetrust.io%22%2C%22chainId%22:1%7D%7D",
        qrPrompt: "Scan here to view a verified digital copy of this brochure",
        links: [
          {
            prompt: "For more Info, please visit:",
            urls: ["www.tradetrust.io", "www.openattestation.com"],
          },
          {
            prompt: "Contact us at:",
            urls: ["tradetrust@imda.gov.sg", "openattestation_support@tech.gov.sg"],
          },
        ],
      },
    },
  },
  proof: {
    type: "OpenAttestationMerkleProofSignature2018",
    proofPurpose: v4.ProofPurpose.AssertionMethod,
    targetHash: "9200e7183f186eaf6c1388a087f09898432866e6f5b48f47ae83cc646293682a",
    proofs: [],
    merkleRoot: "9200e7183f186eaf6c1388a087f09898432866e6f5b48f47ae83cc646293682a",
    salts: "", // Removed for brevity, sample will fail verification
    privacy: {
      obfuscated: [],
    },
    key: "did:ethr:0xe93502ce1A52C1c0e99A2eB6666263EA53dB0a5e#controller",
    signature:
      "0x35b158fdd2076415e6e9f8fb944a05101956ed76f8d951ad0f7326bcfaa78fc716e281b39b196f5c015bad8662acc46af3c74dce335cc6187834c62d0b9a9bb21b",
  },
};
