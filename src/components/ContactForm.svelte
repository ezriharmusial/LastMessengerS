<svelte:head>
</svelte:head>

<script>
</script>

<div class="column">
  <h3>
    <span class="icon">
      <i class="fa fa-list-alt" aria-hidden="true">
      </i>
    </span>
    <span>
      Contact form
    </span>
  </h3>
  <div role="form" lang="nl-NL">
    <div class="screen-reader-response">
    </div>
    <form onSubmit=sendEmail()>
      <div class="field">
        <label class="label" for="your-subject">
          Contact us for 
        </label>
        <div class="control">
          <div class="select">
            <span class="your-subject">
              <select name="your-subject" id="your-subject" aria-invalid="false">
                <option value="PowerMyWater">
                PowerMyWater (PMW-Solar Water-pumps) 
                </option>
                <option value="PowerMyHome">
                PowerMyHome 
                </option>                
                <option value="PowerMyBiz">
                PowerMyBiz 
                </option>
                <option value="PowerMyIndustry">
                PowerMyIndustry
                </option>
                <option value="PowerMyHospital">
                PowerMyHospital
                </option>
                <option value="PowerMyGadgets">
                PowerMyGadgets
                </option>
                <option value="PowerMyCommunity">
                PowerMyCommunity
                </option>
                <option value="Other...">
                Other...
                </option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="label" for="your-name">
          Name
          <sup>
            *
          </sup>
        </div>
        <div class="control has-icons-left has-icons-right">
          <span class="your-name">
            <input type="text" name="your-name" value="" size="40" class="input required requiredField" aria-required="true" aria-invalid="false" placeholder="Your Name*">
          </span>
          <br>
          <span class="icon is-small is-left">
            <br>
            <i class="fa fa-user">
            </i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label" for="your-email">
          Email
          <sup>
            *
          </sup>
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="your-email">
            <input type="email" name="your-email" value="" size="40" class="input required requiredField" aria-required="true" aria-invalid="false" placeholder="Your email*">
          </span>
          <br>
          <span class="icon is-small is-left">
            <i class="fa fa-envelope">
            </i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label" for="your-telephone">
          Telephone
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="your-telephone">
            <input type="tel" name="your-telephone" value="" size="40" class="input" aria-invalid="false" placeholder="Your telephone*">
          </span>
          <span class="icon is-small is-left">
            <i class="fa fa-phone">
            </i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label" for="your-skype">
          Skype ID
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="your-skype">
            <input type="text" name="your-skype" value="" size="40" class="input" aria-invalid="false" placeholder="Skype ID">
          </span>
          <span class="icon is-small is-left">
            <i class="fa fa-skype">
            </i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label" for="your-hometown">
          Place of Residence
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="your-hometown">
            <input type="text" name="your-hometown" value="" size="40" class="input" aria-invalid="false" placeholder="Your Place of Residence">
          </span>
          <br>
          <span class="icon is-small is-left">
            <br>
            <i class="fa fa-home">
            </i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label" for="your-message">
          Message
        </label>
        <div class="control has-icons-left">
          <span class="your-message">
            <textarea name="your-message" cols="40" rows="10" class="textarea" aria-invalid="false" placeholder="Your message">
            </textarea>
          </span>
        </div>
      </div>
      <p class="help is-success">
        <sup>
          *)
        </sup>
        Fields are required.
      </p>
      <div class="g-recaptcha" data-sitekey="6LezS9sZAAAAAMmbsERw6lw0kxiNVyiKZGBtc_d6"></div>
      <div class="field is-grouped">
        <div class="control">
          <input type="submit" value="Send" class="button is-primary">
        </div>
      </div>
    </form>
  </div>
</div>

