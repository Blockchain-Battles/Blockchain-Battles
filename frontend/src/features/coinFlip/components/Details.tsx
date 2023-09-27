import Image from "next/image";

type Props = {};
const Details = (props: Props) => {
  return (
    <div className="w-[300px] shrink-0 p-4 text-justify">
      <h1 className="mb-4 flex text-5xl font-bold">
        <span>Coin Flip</span>{" "}
        <Image
          alt="coin"
          src={"/flipping.gif"}
          width={60}
          height={60}
          className="mt-[-1.9rem]"
        />
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum nesciunt
        laboriosam, doloremque eligendi provident distinctio sit eaque omnis
        eveniet facere hic voluptatum, ab doloribus autem repellat dicta
        aperiam? Consequatur eum id dignissimos expedita commodi vero sint
        perspiciatis aut vitae.
      </p>
    </div>
  );
};
export default Details;
