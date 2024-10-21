/**
 * - Створення та ініціалізація
 * - Зберігання посилання на елемент
 * - Життєвий цикл рефа
 *  - Ініціалізація при монтуванні
 *  - Доступ в ефектах і функціях
 * - Зберігання значень між оновленнями компонента
 *  - Відсутність реактивності
 */

export default function RefBasics() {
  return (
    <div>
      <h2>Ref basics</h2>
      <button>Ref clicks: {0}</button>
      <button>State clicks: {0}</button>
    </div>
  );
}