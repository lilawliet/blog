import ListLayout from '@/layouts/ProjectListLayoutWithTags'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default async function ProjectsPage() {
  return <ListLayout title="Projects" />
}

// import Card from '@/components/Card'
// import { projectsData } from '@/data/projectsData'
// import { genPageMetadata } from 'app/seo'

// export const metadata = genPageMetadata({ title: 'Projects' })

// export default function Projects() {
//   return (
//     <>
//       <div className="divide-y divide-gray-200 dark:divide-gray-700">
//         <div className="container py-12">
//           <div className="-m-4 flex flex-wrap">
//             {projectsData.map((d) => (
//               <Card
//                 key={d.id}
//                 title={d.name}
//                 description={d.description}
//                 imgSrc={d.images?.[0]}
//                 href={d.link}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
