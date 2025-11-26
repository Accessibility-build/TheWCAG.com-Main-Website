import { Breadcrumb } from '@/components/breadcrumb'

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Is Accessibility Work Safe from AI in the Near Future?', href: '/blog/is-accessibility-work-safe-from-ai-in-the-near-future' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          [data-blog-breadcrumb="default"] {
            display: none !important;
          }
        `,
      }} />
      <div className="-mt-6 sm:-mt-8 md:-mt-12 mb-6 sm:mb-8 md:mb-12">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {children}
    </>
  )
}

