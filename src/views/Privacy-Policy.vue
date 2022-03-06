<template>
  <div class="tNc p-4 sm:p-6 max-w-[1200px] mx-auto">
    <MainHeader>
      <SignUpBtn />
    </MainHeader>

    <h1 class="uppercase my-10 text-center font-bold text-3xl">
      Privacy Notes
    </h1>
    <section>
      <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>

      <p class="font-bold">Personal information you disclose to us</p>
      <p>In Short: We collect personal information that you provide to us.</p>
      <p>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <p>Sensitive Information. We do not process sensitive information.</p>
      <p>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
    </section>

    <section>
      <h2>2. USER REPRESENTATIONS</h2>
      <p>
        In Short: We process your information to provide, improve, and
        administer our Services, communicate with you, for security and fraud
        prevention, and to comply with law. We may also process your information
        for other purposes with your consent.
      </p>
      <p>
        We process your personal information for a variety of reasons, depending
        on how you interact with our Services, including:
      </p>
    </section>
    <section>
      <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
      <p>
        In Short: We may share information in specific situations described in
        this section and/or with the following third parties.
      </p>
      <p>
        We may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </li>
        <li>
          Affiliates. We may share your information with our affiliates, in
          which case we will require those affiliates to honor this privacy
          notice. Affiliates include our parent company and any subsidiaries,
          joint venture partners, or other companies that we control or that are
          under common control with us.
        </li>
        <li>
          Business Partners. We may share your information with our business
          partners to offer you certain products, services, or promotions.
        </li>
      </ul>
    </section>

    <section>
      <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
      <p>
        In Short: We may use cookies and other tracking technologies to collect
        and store your information.
      </p>
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice.
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
ul {
  list-style-type: square;
  padding-left: 3rem;
}
li {
  margin-bottom: 0.5rem;
}
p {
  margin: 1.2rem 0;
}
</style>

<script>
import MainHeader from "../components/MainHeader.vue";
import SignUpBtn from "../components/SignUpBtn.vue";

export default {
  name: "PrivacyPolicy",
  components: { MainHeader, SignUpBtn },
};
</script>
