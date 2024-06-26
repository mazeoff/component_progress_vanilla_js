<h1>Тестовое задание: Реализовать блок Progress</h1>
<p>
  <h3>Задача</h3>
Разработать прототип блока Progress для использования в мобильных web-приложениях.
Основное предназначение блока отображать процесс выполнения процессов и их прогресс
выполнения.</p>
<p>
<h3>Особенности</h3>
• Блок должен иметь API для управления его состоянием.<br>
• Блок должен быть спроектирован так, чтобы его было легко переиспользовать в
других приложениях.<br>
<b>Состояния:</b><br>
• Normal – базовое состояние, в котором путём задания Value можно управлять
размером дуги, отражающей некоторый параметр или прогресс процесс. Начало
дуги соответствует 12 часам, конец дуги при увеличении параметра Value
движется по направлению часовой стрелки и достигает начала при значении 100.<br>
• Animated – независимое состояние, при котором блок или его элементы
начинают вращаться с некоторым периодом по часовой стрелке.<br>
• Hidden – состояние скрывающее блок со страницы.<br>
• Результат выполнения задачи должен быть представлен в виде небольшого
приложения с элементами управления (Value – текстовый ввод числа от 0 до 100,
Animate и Hide – логические переключатели on / off, см. Макеты ).<br>
• Приложение должно быть адаптирующимся под ориентацию экрана – будет большим
плюсом.<br>
• Фиолетовые штрихпунктирные линии – вспомогательные линии для облегчения
вёрстки.<br>
</p>
<p>
<h3>Технологии</h3>
• JS (без jQuery и других библиотек / фреймворков, упрощающих и дополняющих
функциональность окружения браузера).<br>
• CSS или любые другие пре/постпроцессоры.<br>
• HTML (без использования шаблонизаторов).<br>
</p>
<p>
<h3>Примечания к выполнению</h3>
Задача считается выполненной, если её можно открыть на телефоне по публичной ссылке на
https://pages.github.com/<br>
</p>

<h3>Макеты</h3>

![maket](https://github.com/mazeoff/component_progress_vanilla_js/assets/55461399/e324ffe7-c34d-440e-849b-fb2ce7d326e5)
