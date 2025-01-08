export const Header = () => {
  return (
    <header class="flex items-end gap-2">
      <div class="flex flex-col justify-end bg-min p-2 h-20 md:h-40">
        <img class="w-12 h-auto" src="/site-umarova/images/logo-white.png" />
      </div>

      <div class="flex flex-col justify-end mb-6 font-ro text-3 select-none line-height-tight">
        <h1>Ingevroren- Noedel Draagtas</h1>
        <span class="font-italic">
          Ministerie van Jodelen en Vingerverf
        </span>
      </div>
    </header>
  );
};
