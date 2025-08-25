import stratrgicPlanning from "@/Assets/images/stratrgicPlanning.jpg"
import RiskManagment from "@/Assets/images/RiskManagment.svg"
import secServ2 from "@/Assets/images/secServ2.svg"
import Gover from "@/Assets/images/GOVNEW.svg"
import dsImg from "@/Assets/images/dsImg.svg"
import organizationDesign from "@/Assets/images/organizationDesign.svg"
import marketingIntelligence from "@/Assets/images/marketingIntelligence.svg"
import financialImg from "@/Assets/images/financialImg.svg"
import govServiceImg from "@/Assets/images/govServiceImg.svg"
import service1mob from "@/Assets/icons/service1mob.svg"
import service1pc from "@/Assets/icons/service1pc.svg"
import digitealTrans from "@/Assets/images/digitealTrans.jpg"
import newInvestor from "@/Assets/images/newInvestor.svg"
import last from "@/Assets/images/last.svg"
import sales from "@/Assets/images/sales.svg"
import sr1 from "@/Assets/images/sr1.svg"
import sr2 from "@/Assets/images/sr2.svg"
import sr3 from "@/Assets/images/sr3.svg"
import sr4 from "@/Assets/images/sr4.svg"
import sr5 from "@/Assets/images/sr5.svg"
import sr6 from "@/Assets/images/sr6.svg"
import sr7 from "@/Assets/images/sr7.svg"
import sr8 from "@/Assets/images/sr8.svg"
import sr9 from "@/Assets/images/sr9.svg"
import sr10 from "@/Assets/images/sr10.svg"
import sr11 from "@/Assets/images/sr11.svg"
import salesImg from "@/Assets/images/salesImg.svg"
import newInvImg from "@/Assets/images/newInvImg.svg"
import hrImg from "@/Assets/images/hrImg.svg"
import orgImg from "@/Assets/images/orgImg.svg"
import financialAdvisory from "@/Assets/images/financialAdvisory.svg"
import marImg from "@/Assets/images/digImg.svg"
import hrCons from "@/Assets/images/hrCons.jpg"
import industImg from "@/Assets/images/industImg.svg"
import earth from "@/Assets/icons/earth.svg"
import market from "@/Assets/icons/market.svg"
import goal from "@/Assets/icons/goal.svg"
import chart from "@/Assets/icons/chart.svg"
import compass from "@/Assets/icons/compass.svg"
import shield from "@/Assets/icons/shield.svg"
import docs from "@/Assets/icons/docs.svg"
import outsourcing from "@/Assets/icons/outsourcing.svg"
import banking from "@/Assets/icons/banking.svg"
import book from "@/Assets/icons/book.svg"
import optimization from "@/Assets/icons/optimization.svg"
import key from "@/Assets/icons/key.svg"
import casee from "@/Assets/icons/case.svg"
import code from "@/Assets/icons/code.svg"
import algorithm from "@/Assets/icons/algorithm.svg"
import hammer from "@/Assets/icons/hammer.svg"
import screenPurple from "@/Assets/icons/screenPurple.svg"
import pricing from "@/Assets/icons/pricing.svg"
import folderPurple from "@/Assets/icons/folderPurple.svg"
import home from "@/Assets/icons/home.svg"
import vip from "@/Assets/icons/vip.svg"
import pricingWhite from "@/Assets/icons/pricingWhite.svg"
import document from "@/Assets/icons/document.svg"
import simplification from "@/Assets/icons/simplification.svg"
import folder from "@/Assets/icons/folder.svg"
import bookWhite from "@/Assets/icons/bookWhite.svg"
import codeWhite from "@/Assets/icons/codeWhite.svg"
import caseWhite from "@/Assets/icons/caseWhite.svg"
import screen from "@/Assets/icons/screen.svg"
import roadmap from "@/Assets/icons/roadmap.svg"
import optWhite from "@/Assets/icons/optWhite.svg"
import shieldWhite from "@/Assets/icons/shieldWhite.svg"
import targetWhite from "@/Assets/icons/targetWhite.svg"
import algorithmWhite from "@/Assets/icons/algorithmWhite.svg"
import earthWhite from "@/Assets/icons/earthWhite.svg"
import homeWhite from "@/Assets/icons/homeWhite.svg"
import ss from "@/Assets/icons/ss.svg"
// araibic
import sr1Ar from "@/Assets/images/sr1Ar.svg"
import sr2Ar from "@/Assets/images/sr2Ar.svg"
import sr3Ar from "@/Assets/images/sr3Ar.svg"
import sr4Ar from "@/Assets/images/sr4Ar.svg"
import sr5Ar from "@/Assets/images/sr5Ar.svg"
import sr6Ar from "@/Assets/images/sr6Ar.svg"
import sr7Ar from "@/Assets/images/sr7Ar.svg"
import sr8Ar from "@/Assets/images/sr8Ar.svg"
import sr9Ar from "@/Assets/images/sr9Ar.svg"
import sr10Ar from "@/Assets/images/sr10Ar.svg"
import sr11Ar from "@/Assets/images/sr11Ar.svg"



export const services = [
    {
        id: "strategic-planning",
        title: "strategic_planning",
        question: "why_strategic_planning",
        description: "strategic_planning_description",
        button: "request_strategy_consultation",
        longDescription: "strategic_planning_long_description",
        deliveryElements: [
            {
                icon: earth,
                title: "environmental_scanning",
                description: "environmental_scanning_desc"
            },
            {
                icon: compass,
                title: "resource_mapping",
                description: "resource_mapping_desc"
            },
            {
                icon: goal,
                title: "strategy_setup",
                description: "strategy_setup_desc"
            },
            {
                icon: chart,
                title: "balanced_scorecard_kpis",
                description: "balanced_scorecard_kpis_desc"
            },
            {
                icon: market,
                title: "performance_dashboards",
                description: "performance_dashboards_desc"
            }
        ],
        benefits: [
            "strategic_planning_benefit_1",
            "strategic_planning_benefit_2",
            "strategic_planning_benefit_3",
            "strategic_planning_benefit_4",
            "strategic_planning_benefit_5"
        ],
        recievElements: [
            {
                icon: document,
                title: "full_strategic_planning_document"
            },
            {
                icon: simplification,
                title: "balanced_scorecard_model_kpis",
            },
            {
                icon: folder,
                title: "operational_roadmap_milestones",
            },
            {
                icon: screen,
                title: "custom_performance_dashboard",
            }
        ],
        servicePc: service1pc,
        servicePcAr: sr1Ar,
        image: stratrgicPlanning,
        sectionImage: sr1
    },
    {
        id: "risk-management",
        title: "risk_management",
        question: "why_risk_management",
        description: "risk_management_description",
        button: "request_risk_consultation",
        longDescription: "risk_management_long_description",

        deliveryElements: [
            {
                icon: compass,
                title: "risk_maturity_assessment",
                description: "risk_maturity_assessment_desc"
            },
            {
                icon: shield,
                title: "risk_mitigation_plan",
                description: "risk_mitigation_plan_desc"
            },
            {
                icon: docs,
                title: "iso_31000_framework",
                description: "iso_31000_framework_desc"
            },
            {
                icon: goal,
                title: "awareness_training_coaching",
                description: "awareness_training_coaching_desc"
            },
        ],
        benefits: [
            "risk_management_benefit_1",
            "risk_management_benefit_2",
            "risk_management_benefit_3",
            "risk_management_benefit_4",
            "risk_management_benefit_5"
        ],
        recievElements: [
            {
                icon: simplification,
                title: "full_risk_assessment_report",
            },
            {
                icon: document,
                title: "custom_risk_register",
            },
            {
                icon: shieldWhite,
                title: "iso_31000_aligned_framework",
            },
            {
                icon: targetWhite,
                title: "awareness_training_program",
            }
        ],
        servicePc: sr2,
        image: RiskManagment,
        sectionImage: secServ2,
        servicePcAr: sr2Ar

    },
    {
        id: "corporate-governance",
        image: Gover,
        title: "corporate_governance",
        button: "request_governance_consultation",
        question: "why_corporate_governance",
        description: "corporate_governance_description",
        longDescription: "corporate_governance_long_description",
        servicePc: govServiceImg,
        sectionImage: sr3,
        servicePcAr: sr3Ar,
        deliveryElements: [
            {
                icon: banking,
                title: "governance_practices_review",
                description: "governance_practices_review_desc"
            },
            {
                icon: book,
                title: "governance_manual",
                description: "governance_manual_desc"
            },
            {
                icon: docs,
                title: "board_policies_procedures",
                description: "board_policies_procedures_desc"
            },
            {
                icon: key,
                title: "delegation_of_authority",
                description: "delegation_of_authority_desc"
            },
            {
                icon: casee,
                title: "board_compensation_frameworks",
                description: "board_compensation_frameworks_desc"
            },
            {
                icon: code,
                title: "board_code_of_conduct",
                description: "board_code_of_conduct_desc"
            },
        ],
        benefits: [
            "corporate_governance_benefit_1",
            "corporate_governance_benefit_2",
            "corporate_governance_benefit_3",
            "corporate_governance_benefit_4",
            "corporate_governance_benefit_5",
        ],
        recievElements: [
            {
                icon: document,
                title: "governance_assessment_report",
            },
            {
                icon: bookWhite,
                title: "custom_governance_manual",
            },
            {
                icon: folder,
                title: "full_board_policy_set",
            },
            {
                icon: simplification,
                title: "delegation_authority_matrix",
            },
            {
                icon: codeWhite,
                title: "code_of_conduct_document",
            },
            {
                icon: caseWhite,
                title: "compensation_rewards_structure",
            }
        ],
    },
    {
        id: "organization-design",
        image: organizationDesign,
        title: "organization_design",
        button: "request_organization_design_consultation",
        question: "why_organization_design",
        description: "organization_design_description",
        longDescription: "organization_design_long_description",
        sectionImage: sr4,
        servicePc: orgImg, 
        servicePcAr: sr4Ar,
        deliveryElements: [
            {
                icon: chart,
                title: "organizational_structuring",
                description: "organizational_structuring_desc"
            },
            {
                icon: optimization,
                title: "business_process_reengineering",
                description: "business_process_reengineering_desc"
            },
            {
                icon: docs,
                title: "job_reengineering_evaluation",
                description: "job_reengineering_evaluation_desc"
            },
            {
                icon: book,
                title: "standard_operating_procedures",
                description: "standard_operating_procedures_desc"
            },
        ],
        benefits: [
            "organization_design_benefit_1",
            "organization_design_benefit_2",
            "organization_design_benefit_3",
            "organization_design_benefit_4",
            "organization_design_benefit_5",
        ],
        recievElements: [
            {
                icon: simplification,
                title: "organizational_structure_blueprint",
            },
            {
                icon: optWhite,
                title: "reengineered_processes_sops",
            },
            {
                icon: document,
                title: "updated_job_descriptions",
            },
            {
                icon: roadmap,
                title: "implementation_roadmap",
            }
        ],
    },
    {
        id: "marketing-intelligence-digital-marketing",
        image: marketingIntelligence,
        title: "marketing_intelligence",
        button: "request_marketing_consultation",
        question: "why_marketing_intelligence",
        description: "marketing_intelligence_description",
        longDescription: "marketing_intelligence_long_description",
        sectionImage: marImg,
        servicePc: sr5,
         servicePcAr: sr5Ar,
        deliveryElements: [
            {
                icon: chart,
                title: "market_intelligence",
                description: "market_intelligence_desc"
            },
            {
                icon: goal,
                title: "marketing_strategy_setup",
                description: "marketing_strategy_setup_desc"
            },
            {
                icon: screenPurple,
                title: "digital_marketing_execution",
                description: "digital_marketing_execution_desc"
            },
        ],
        benefits: [
            "marketing_intelligence_benefit_1",
            "marketing_intelligence_benefit_2",
            "marketing_intelligence_benefit_3",
            "marketing_intelligence_benefit_4",
            "marketing_intelligence_benefit_5",
        ],
        recievElements: [
            {
                icon: simplification,
                title: "market_research_report",
            },
            {
                icon: targetWhite,
                title: "full_marketing_strategy",
            },
            {
                icon: screen,
                title: "website_digital_assets",
            },
            {
                icon: document,
                title: "campaign_execution_reports",
            }
        ],
    },
    {
        id: "digital-transformation",
        image: digitealTrans,
        title: "digital_transformation",
        button: "digital_transformation_consultation",
        question: "why_digital_transformation",
        description: "digital_transformation_description",
        longDescription: "digital_transformation_long_description",
        sectionImage: dsImg,
        servicePc: sr6,
         servicePcAr: sr6Ar,
        deliveryElements: [
            {
                icon: chart,
                title: "digital_maturity_diagnosis",
                description: "digital_maturity_diagnosis_desc"
            },
            {
                icon: screenPurple,
                title: "system_architecture_design",
                description: "system_architecture_design_desc"
            },
            {
                icon: market,
                title: "data_infrastructure_management",
                description: "data_infrastructure_management_desc"
            },
            {
                icon: algorithm,
                title: "generative_ai_integration",
                description: "generative_ai_integration_desc"
            },
            {
                icon: hammer,
                title: "technology_needs_assessment",
                description: "technology_needs_assessment_desc"
            },
        ],
        benefits: [
            "digital_transformation_benefit_1",
            "digital_transformation_benefit_2",
            "digital_transformation_benefit_3",
            "digital_transformation_benefit_4",
            "digital_transformation_benefit_5",
        ],
        recievElements: [
            {
                icon: document,
                title: "digital_readiness_report",
            },
            {
                icon: screen,
                title: "scalable_system_architecture",
            },
            {
                icon: simplification,
                title: "data_infrastructure_blueprint",
            },
            {
                icon: algorithmWhite,
                title: "ai_integration_plan",
            },
            {
                icon: roadmap,
                title: "technology_implementation_roadmap",
            }
        ],
    },
    {
        id: "sales-development",
        image: sales,
        title: "sales_development",
        button: "request_sales_development_consultation",
        question: "why_sales_development",
        description: "sales_development_description",
        longDescription: "sales_development_long_description",
        sectionImage: salesImg,
        servicePc: sr7,
         servicePcAr: sr7Ar,
        deliveryElements: [
            {
                icon: goal,
                title: "sales_strategy_development",
                description: "sales_strategy_development_desc"
            },
            {
                icon: chart,
                title: "performance_analytics_sales_enablement",
                description: "performance_analytics_sales_enablement_desc"
            },
            {
                icon: pricing,
                title: "pricing_structure_optimization",
                description: "pricing_structure_optimization_desc"
            },
        ],
        benefits: [
            "sales_development_benefit_1",
            "sales_development_benefit_2",
            "sales_development_benefit_3",
            "sales_development_benefit_4",
            "sales_development_benefit_5"
        ],
        recievElements: [
            {
                icon: document,
                title: "sales_strategy_blueprint",
            },
            {
                icon: roadmap,
                title: "outreach_territory_plan",
            },
            {
                icon: simplification,
                title: "sales_performance_dashboard",
            },
            {
                icon: pricingWhite,
                title: "pricing_framework_model",
            }
        ],
    },
    {
        id: "financial-advisory-consultation",
        image: financialAdvisory,
        title: "financial_advisory",
        button: "request_financial_consultation",
        question: "why_financial_advisory",
        description: "financial_advisory_description",
        longDescription: "financial_advisory_long_description",
        sectionImage: financialImg,
        servicePc: sr8,
         servicePcAr: sr8Ar,
        deliveryElements: [
            {
                icon: book,
                title: "accounting_tax_advisory",
                description: "accounting_tax_advisory_desc"
            },
            {
                icon: chart,
                title: "actuarial_valuation",
                description: "actuarial_valuation_desc"
            },
            {
                icon: docs,
                title: "business_continuity_planning",
                description: "business_continuity_planning_desc"
            },
            {
                icon: code,
                title: "ifrs_implementation",
                description: "ifrs_implementation_desc"
            },
            {
                icon: folderPurple,
                title: "financial_planning_analysis",
                description: "financial_planning_analysis_desc"
            },
        ],
        benefits: [
            "financial_advisory_benefit_1",
            "financial_advisory_benefit_2",
            "financial_advisory_benefit_3",
            "financial_advisory_benefit_4",
            "financial_advisory_benefit_5"
        ],
        recievElements: [
            {
                icon: bookWhite,
                title: "tax_accounting_compliance",
            },
            {
                icon: document,
                title: "valuation_liability_reports",
            },
            {
                icon: folder,
                title: "business_continuity_risk_plan",
            },
            {
                icon: codeWhite,
                title: "ifrs_implementation_guide",
            },
            {
                icon: simplification,
                title: "financial_dashboards_forecasts",
            }
        ],
    },
    {
        id: "human-resource-consulting",
        image: hrCons,
        title: "hr_consulting",
        button: "request_hr_consultation",
        question: "why_hr_consulting",
        description: "hr_consulting_description",
        longDescription: "hr_consulting_long_description",
        sectionImage: hrImg,
        servicePc: sr9,
         servicePcAr: sr9Ar,
        deliveryElements: [
            {
                icon: goal,
                title: "hr_strategic_planning",
                description: "hr_strategic_planning_desc"
            },
            {
                icon: chart,
                title: "rewards_performance_management",
                description: "rewards_performance_management_desc"
            },
            {
                icon: book,
                title: "talent_management_development",
                description: "talent_management_development_desc"
            },
            {
                icon: screenPurple,
                title: "hr_analytics_dashboard",
                description: "hr_analytics_dashboard_desc"
            },
            {
                icon: folderPurple,
                title: "hris_technology_integration",
                description: "hris_technology_integration_desc"
            },
            {
                icon: docs,
                title: "policy_development_compliance",
                description: "policy_development_compliance_desc"
            },
            {
                icon: outsourcing,
                title: "hr_outsourcing",
                description: "hr_outsourcing_desc"
            },
        ],
        benefits: [
            "hr_consulting_benefit_1",
            "hr_consulting_benefit_2",
            "hr_consulting_benefit_3",
            "hr_consulting_benefit_4",
            "hr_consulting_benefit_5",
        ],
        recievElements: [
            {
                icon: document,
                title: "hr_strategic_plan",
            },
            {
                icon: bookWhite,
                title: "policy_manual_compliance",
            },
            {
                icon: simplification,
                title: "rewards_structure_performance",
            },
            {
                icon: ss,
                title: "hris_setup_training",
            },
            {
                icon: codeWhite,
                title: "talent_development_framework",
            },
            {
                icon: screen,
                title: "hr_dashboard_analytics",
            }
        ],
    },
    {
        id: "New-Investor-Services",
        image: newInvestor,
        title: "new_investor_services",
        button: "request_investor_setup_support",
        question: "why_new_investor_services",
        description: "new_investor_services_description",
        longDescription: "new_investor_services_long_description",
        sectionImage: newInvImg,
        servicePc: sr10,
         servicePcAr: sr10Ar,
        deliveryElements: [
            {
                icon: docs,
                title: "company_formation_licensing",
                description: "company_formation_licensing_desc"
            },
            {
                icon: earth,
                title: "investor_visa_residency",
                description: "investor_visa_residency_desc"
            },
            {
                icon: home,
                title: "accommodation_relocation",
                description: "accommodation_relocation_desc"
            },
            {
                icon: screenPurple,
                title: "office_setup_furnishing",
                description: "office_setup_furnishing_desc"
            },
            {
                icon: folderPurple,
                title: "business_services_center",
                description: "business_services_center_desc"
            },
            {
                icon: vip,
                title: "vip_concierge_greeting",
                description: "vip_concierge_greeting_desc"
            },
        ],
        benefits: [
            "new_investor_services_benefit_1",
            "new_investor_services_benefit_2",
            "new_investor_services_benefit_3",
            "new_investor_services_benefit_4",
            "new_investor_services_benefit_5",
        ],
        recievElements: [
            {
                icon: document,
                title: "registered_legal_entity",
            },
            {
                icon: earthWhite,
                title: "visa_residency_setup",
            },
            {
                icon: homeWhite,
                title: "relocation_accommodation_support",
            },
            {
                icon: screen,
                title: "operational_workspace_setup",
            },
            {
                icon: folder,
                title: "ongoing_admin_compliance",
            }
        ],
    },
    {
        id: "Industrial-Services-Studies",
        image: last,
        title: "industrial_services",
        button: "request_industrial_assessment",
        question: "why_industrial_services",
        description: "industrial_services_description",
        longDescription: "industrial_services_long_description",
        sectionImage: industImg,
        servicePc: sr11,
         servicePcAr: sr11Ar,
        deliveryElements: [
            {
                icon: chart,
                title: "industrial_studies_technical",
                description: "industrial_studies_technical_desc"
            },
            {
                icon: screenPurple,
                title: "oee_systems_dashboards",
                description: "oee_systems_dashboards_desc"
            },
            {
                icon: docs,
                title: "process_data_sheet",
                description: "process_data_sheet_desc"
            },
            {
                icon: folderPurple,
                title: "lean_methodology_implementation",
                description: "lean_methodology_implementation_desc"
            },
        ],
        benefits: [
            "industrial_services_benefit_1",
            "industrial_services_benefit_2",
            "industrial_services_benefit_3",
            "industrial_services_benefit_4",
            "industrial_services_benefit_5",
        ],
        recievElements: [
            {
                icon: document,
                title: "technical_feasibility_reports",
            },
            {
                icon: screen,
                title: "oee_dashboard_metrics",
            },
            {
                icon: codeWhite,
                title: "documented_pds_processes",
            },
            {
                icon: folder,
                title: "lean_implementation_tools",
            }
        ],
    },
];
