import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm ", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormat}
            </span>
            
            <div className={`rounded border border-gray-500 group-hover:border-yellow-600 p-4 mt-2 ${isActiveLesson ? 'bg-yellow-800' : ''}`}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={`flex items-center gap-2 text-sm text-blue-500 font-medium ${isActiveLesson ? 'text-white' : ''}`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded px-2 py-[2px] border border-yellow-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={`text-gray-200 mt-5 block ${isActiveLesson ? 'text-white' : ''}`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}