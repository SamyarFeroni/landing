export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-12 border-t">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} فروشگاه من. تمامی حقوق محفوظ است.
      </p>
    </footer>
  );
}
