import Image from "next/image";
import Link from "next/link";
const imageUrls = {
  black:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=100",
  white:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=750&q=100",
  blue: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=750&q=100",
};

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "md", "l", "xl"];

export default function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedColor = (searchParams.color || "black") as string;
  const selectedSize = (searchParams.size || "md") as string;

  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white flex items-center w-[96%] rounded min-h-[75vh]">
        <div className="flex-[2] flex justify-center">
          <Image
            /// @ts-ignore
            src={imageUrls[selectedColor]}
            alt="Shirt variant"
            width={622}
            height={550}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold ">Acme Circles T-Shirt</h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $20.00 USD
          </section>

          <div>
            <section className="mb-5">
              <h2 className="text-md uppercase mb-2">Color</h2>

              <div className="flex gap-2">
                {colorVariants.map((color, index) => (
                  <Link
                    key={index}
                    href={`?${new URLSearchParams({
                      color,
                      size: selectedSize,
                    })}`}
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-md uppercase mb-2">Sizes</h2>

              <div className="flex gap-2">
                {sizeVariants.map((size, index) => (
                  <Link
                    key={index}
                    href={`?${new URLSearchParams({
                      color: selectedColor,
                      size,
                    })}`}
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    {size.toUpperCase()}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
