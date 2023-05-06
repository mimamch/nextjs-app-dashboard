import { demos } from '@/lib/demos';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium dark:text-gray-300">Examples</h1>

      <div className="space-y-10 dark:text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider dark:text-gray-400">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-50 px-5  py-3 shadow-black/20 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      <div className="font-medium dark:text-gray-200 dark:group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm dark:text-gray-400 dark:group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
