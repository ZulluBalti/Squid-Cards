<template>
  <div class="tNc p-4 sm:p-6 max-w-[1200px] mx-auto">
    <MainHeader>
      <SignUpBtn />
    </MainHeader>

    <h1 class="uppercase my-10 text-center font-bold text-3xl">
      Term and Conditions
    </h1>
    <section>
      <h2>1. AGREEMENT TO TERMS</h2>
      <p>
        These Terms of Use constitute a legally binding agreement made between
        you, whether personally or on behalf of an entity (“you”) and __________
        ("Company," “we," “us," or “our”), concerning your access to and use of
        the https://squid-cards.netlify.com/ website as well as any other media
        form, media channel, mobile website or mobile application related,
        linked, or otherwise connected thereto (collectively, the “Site”). You
        agree that by accessing the Site, you have read, understood, and agreed
        to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL
        OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
        SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </p>

      <p>
        Supplemental terms and conditions or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Terms of Use from time to time. We will alert
        you about any changes by updating the “Last updated” date of these Terms
        of Use, and you waive any right to receive specific notice of each such
        change. Please ensure that you check the applicable Terms every time you
        use our Site so that you understand which Terms apply. You will be
        subject to, and will be deemed to have been made aware of and to have
        accepted, the changes in any revised Terms of Use by your continued use
        of the Site after the date such revised Terms of Use are posted.
      </p>

      <p>
        The information provided on the Site is not intended for distribution to
        or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which
        would subject us to any registration requirement within such
        jurisdiction or country. Accordingly, those persons who choose to access
        the Site from other locations do so on their own initiative and are
        solely responsible for compliance with local laws, if and to the extent
        local laws are applicable.
      </p>

      <p>
        The Site is not tailored to comply with industry-specific regulations
        (Health Insurance Portability and Accountability Act (HIPAA), Federal
        Information Security Management Act (FISMA), etc.), so if your
        interactions would be subjected to such laws, you may not use this Site.
        You may not use the Site in a way that would violate the
        Gramm-Leach-Bliley Act (GLBA).
      </p>
      <p>
        All users who are minors in the jurisdiction in which they reside
        (generally under the age of 18) must have the permission of, and be
        directly supervised by, their parent or guardian to use the Site. If you
        are a minor, you must have your parent or guardian read and agree to
        these Terms of Use prior to you using the Site.
      </p>
    </section>

    <section>
      <h2>2. USER REPRESENTATIONS</h2>
      <p>
        By using the Site, you represent and warrant that: (1) all registration
        information you submit will be true, accurate, current, and complete;
        (2) you will maintain the accuracy of such information and promptly
        update such registration information as necessary; (3) you have the
        legal capacity and you agree to comply with these Terms of Use; (4) you
        are not a minor in the jurisdiction in which you reside, or if a minor,
        you have received parental permission to use the Site; (5) you will not
        access the Site through automated or non-human means, whether through a
        bot, script, or otherwise; (6) you will not use the Site for any illegal
        or unauthorized purpose; and (7) your use of the Site will not violate
        any applicable law or regulation.
      </p>

      <p>
        If you provide any information that is untrue, inaccurate, not current,
        or incomplete, we have the right to suspend or terminate your account
        and refuse any and all current or future use of the Site (or any portion
        thereof).
      </p>
    </section>
    <section>
      <h2>3. USER REGISTRATION</h2>
      <p>
        You may be required to register with the Site. You agree to keep your
        password confidential and will be responsible for all use of your
        account and password. We reserve the right to remove, reclaim, or change
        a username you select if we determine, in our sole discretion, that such
        username is inappropriate, obscene, or otherwise objectionable.
      </p>
    </section>

    <section>
      <h2>4. PRIVACY POLICY</h2>

      <p>
        We care about data privacy and security. Please review our Privacy
        Policy: https://squid-cards.netlify.com/privacy-policy. By using the
        Site, you agree to be bound by our Privacy Policy, which is incorporated
        into these Terms of Use. Please be advised the Site is hosted in the
        United States. If you access the Site from any other region of the world
        with laws or other requirements governing personal data collection, use,
        or disclosure that differ from applicable laws in the United States,
        then through your continued use of the Site, you are transferring your
        data to the United States, and you agree to have your data transferred
        to and processed in the United States.
      </p>
    </section>
  </div>
</template>

<style scoped>
h2 {
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1.5rem;
}
p {
  margin: 1.2rem 0;
}
</style>

<script>
import MainHeader from "../components/MainHeader.vue";
import SignUpBtn from "../components/SignUpBtn.vue";

export default {
  name: "TnC",
  components: { MainHeader, SignUpBtn },
};
</script>
