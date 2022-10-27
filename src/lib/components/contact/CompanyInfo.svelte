<script>
  let lang = 'en';
  const locale = {}
  locale['en'] = {
      "telephone": "Telephone",
      "bankaccount": "IBAN / Bank nr.",
      "tax": "Chamber of Commerce nr. "
  }
  locale['nl'] = {
    "telephone": "Telefoon",
      "bankaccount": "IBAN Rekening",
      "tax": "KVK Nummer"
  }
</script>

<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">{ locale[lang].telephone } (HOLLAND)
      </p>
      <p class="title is-size-6-desktop is-size-6-touch">+31(0)6 285 86 335 
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">{ locale[lang].telephone } (AFRICA)
      </p>
      <p class="title is-size-6-desktop is-size-6-touch">+234 (0)81 601 451 77
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">{ locale[lang].bankaccount }
      </p>
      <p class="title is-size-6-desktop is-size-6-touch">NL92INGB0006639081
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">{ locale[lang].tax }
      </p>
      <p class="title is-size-6-desktop is-size-6-touch">55762441
      </p>
    </div>
  </div>
</nav>
