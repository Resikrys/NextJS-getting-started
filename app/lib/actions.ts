'use server';

export async function createInvoice(formData: FormData) {
      const rawFormData = {
    customerId: formData.get('customerId'), //For multiple fields we use entries() instead of get('name')
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}