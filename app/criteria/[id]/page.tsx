import { notFound } from "next/navigation"
import { getCriterionById } from "@/lib/wcag-data"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { LevelBadge } from "@/components/level-badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Section components
import { OfficialExplanationSection } from "./sections/official-explanation-section"
import { SimpleExplanationSection } from "./sections/simple-explanation-section"
import { BenefitsBreakdownSection } from "./sections/benefits-breakdown-section"
import { KeyTermsSection } from "./sections/key-terms-section"
import { RealWorldExamplesSection } from "./sections/real-world-examples-section"
import { AffectedUsersSection } from "./sections/affected-users-section"
import { ImplementationChecklistSection } from "./sections/implementation-checklist-section"
import { TestingSection } from "./sections/testing-section"
import { ComplianceRequirementsSection } from "./sections/compliance-requirements-section"
import { BeyondComplianceSection } from "./sections/beyond-compliance-section"
import { ExampleComponentSection } from "./sections/example-component-section"
import { MythsSection } from "./sections/myths-section"
import { CommonFailuresSection } from "./sections/common-failures-section"
import { RelatedCriteriaSection } from "./sections/related-criteria-section"
import { ResourcesSection } from "./sections/resources-section"
import { ImplementationCTASection } from "./sections/implementation-cta-section"

interface CriterionPageProps {
  params: Promise<{ id: string }>
}

export default async function CriterionPage({ params }: CriterionPageProps) {
  const { id } = await params
  // Convert dot format (1.1.1) to dash format (1-1-1)
  const criterionId = id.replace(/\./g, "-")
  const criterion = getCriterionById(criterionId)

  if (!criterion) {
    notFound()
  }

  const principleName = criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)

  return (
    <CriteriaPageLayout>
      <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground/50 px-1" aria-hidden="true">
              /
            </li>
            <li>
              <Link href="/principles" className="hover:text-foreground transition-colors">
                Principles
              </Link>
            </li>
            <li className="text-muted-foreground/50 px-1" aria-hidden="true">
              /
            </li>
            <li>
              <Link
                href={`/principles/${criterion.principle}`}
                className="hover:text-foreground transition-colors"
              >
                {principleName}
              </Link>
            </li>
            <li className="text-muted-foreground/50 px-1" aria-hidden="true">
              /
            </li>
            <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {criterion.number} {criterion.title}
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Button variant="ghost" asChild className="text-sm sm:text-base">
            <Link href={`/principles/${criterion.principle}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Back to {principleName}</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>

        {/* Criteria Heading */}
        <header className="mb-8 sm:mb-12">
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <LevelBadge level={criterion.level} />
              <span className="text-xs sm:text-sm text-muted-foreground">
                {criterion.guidelineNumber} {criterion.guideline}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              {criterion.number} {criterion.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">{criterion.summary}</p>
          </div>
          {criterion.whyItMatters && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-primary/10 border-l-4 border-l-primary rounded-r-lg">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <strong className="font-semibold">Why it matters:</strong> {criterion.whyItMatters}
            </p>
          </div>
          )}
        </header>

        {/* Official Explanation Section */}
        <OfficialExplanationSection criterion={criterion} />

        {/* Simple English Explanation */}
        <SimpleExplanationSection criterion={criterion} />

        {/* Benefits Breakdown */}
        {criterion.whoBenefits && criterion.whoBenefits.length > 0 && (
          <BenefitsBreakdownSection whoBenefits={criterion.whoBenefits} />
        )}

        {/* Key Terms */}
        {criterion.keyTerms && criterion.keyTerms.length > 0 && (
          <KeyTermsSection keyTerms={criterion.keyTerms} />
        )}

        {/* Real World Examples */}
        {criterion.examples && criterion.examples.length > 0 && (
          <RealWorldExamplesSection examples={criterion.examples} />
        )}

        {/* Affected Users */}
        {criterion.whoBenefits && criterion.whoBenefits.length > 0 && (
          <AffectedUsersSection whoBenefits={criterion.whoBenefits} />
        )}

        {/* Implementation Checklist */}
        {criterion.implementationChecklist && criterion.implementationChecklist.length > 0 && (
          <ImplementationChecklistSection
            checklist={criterion.implementationChecklist}
            criterionNumber={criterion.number}
            criterionTitle={criterion.title}
          />
        )}

        {/* Testing Section */}
        {criterion.testing && (
          <TestingSection testing={criterion.testing} />
        )}

        {/* Compliance Requirements */}
        {criterion.complianceRequirements && criterion.complianceRequirements.length > 0 && (
          <ComplianceRequirementsSection requirements={criterion.complianceRequirements} />
        )}

        {/* Beyond Compliance */}
        {criterion.beyondCompliance && criterion.beyondCompliance.length > 0 && (
          <BeyondComplianceSection beyondCompliance={criterion.beyondCompliance} />
        )}

        {/* Example Component (conditional) */}
        {criterion.exampleComponent && (
          <ExampleComponentSection componentName={criterion.exampleComponent} />
        )}

        {/* Myths Section */}
        {criterion.myths && criterion.myths.length > 0 && (
          <MythsSection myths={criterion.myths} />
        )}

        {/* Common Failures */}
        {criterion.commonFailures && criterion.commonFailures.length > 0 && (
          <CommonFailuresSection failures={criterion.commonFailures} />
        )}

        {/* Related Criteria */}
        {criterion.relatedCriteria && criterion.relatedCriteria.length > 0 && (
          <RelatedCriteriaSection relatedCriteria={criterion.relatedCriteria} />
        )}

        {/* Resources */}
        {criterion.officialResources && criterion.officialResources.length > 0 && (
          <ResourcesSection
            officialResources={criterion.officialResources}
            criterionNumber={criterion.number}
          />
        )}

        {/* Implementation CTA (replaces code examples) */}
        <ImplementationCTASection
          criterionNumber={criterion.number}
          criterionTitle={criterion.title}
        />

        {/* Navigation to Related Criteria */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Part of</p>
              <Link
                href={`/principles/${criterion.principle}`}
                className="text-sm sm:text-base text-primary hover:underline font-medium"
              >
                {principleName} Principle
              </Link>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Guideline</p>
              <p className="text-sm sm:text-base font-medium">{criterion.guidelineNumber} {criterion.guideline}</p>
            </div>
          </div>
        </div>
      </div>
    </CriteriaPageLayout>
  )
}
