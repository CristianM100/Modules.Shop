const FAQPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">How do I get started?</h3>
          <p className="text-gray-600">
            Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course that interests you. You'll get immediate access to all course materials after enrollment.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
          <p className="text-gray-600">
            We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">Do courses have an expiration date?</h3>
          <p className="text-gray-600">
            No, once you purchase a course, you have lifetime access to the content. You can learn at your own pace and revisit the materials whenever you need to.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">Are certificates provided upon completion?</h3>
          <p className="text-gray-600">
            Yes! Upon successful completion of a course, you'll receive a certificate that you can download and share on your professional networks.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">What if I'm not satisfied with a course?</h3>
          <p className="text-gray-600">
            We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team within 30 days for a full refund.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3">How can I get help if I'm stuck?</h3>
          <p className="text-gray-600">
            Each course has a dedicated discussion forum where you can ask questions. Our instructors and community members are always ready to help you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
