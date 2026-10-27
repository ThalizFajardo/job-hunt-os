import { useDraggable } from "@dnd-kit/core"
import type {
  Application,
} from "@job-hunt/contracts";


type Props = {
  application : Application
}

const ApplicationCard = ({application} : Props) => {
 const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: application.id,
  });

   const style = transform
    ? { 
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
     <article
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="mb-3 cursor-grab rounded-lg bg-white p-4 shadow-sm"
    >
      <p className="font-medium">
        {application.role}
      </p>

      <p className="text-sm text-slate-500">
        {application.company}
      </p>
    </article>
  )
}

export default ApplicationCard