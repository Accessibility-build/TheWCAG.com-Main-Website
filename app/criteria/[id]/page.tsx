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
      <div className="container py-8 md:py-12 max-w-6xl">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/principles" className="hover:text-foreground transition-colors">
                Principles
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/principles/${criterion.principle}`}
                className="hover:text-foreground transition-colors"
              >
                {principleName}
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium" aria-current="page">
              {criterion.number} {criterion.title}
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href={`/principles/${criterion.principle}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {principleName}
            </Link>
          </Button>
        </div>

        {/* Criteria Heading */}
        <header className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <LevelBadge level={criterion.level} />
                <span className="text-sm text-muted-foreground">
                  {criterion.guidelineNumber} {criterion.guideline}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {criterion.number} {criterion.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{criterion.summary}</p>
            </div>
          </div>
          {criterion.whyItMatters && (
            <div className="mt-6 p-6 bg-primary/10 border-l-4 border-l-primary rounded-r-lg">
            <p className="text-lg leading-relaxed">
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
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Part of</p>
              <Link
                href={`/principles/${criterion.principle}`}
                className="text-primary hover:underline font-medium"
              >
                {principleName} Principle
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-2">Guideline</p>
              <p className="font-medium">{criterion.guidelineNumber} {criterion.guideline}</p>
            </div>
          </div>
        </div>
      </div>
    </CriteriaPageLayout>
  )
}
