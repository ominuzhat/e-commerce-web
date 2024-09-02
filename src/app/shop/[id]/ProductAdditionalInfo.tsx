const ProductAdditionalInfo = () => {
  return (
    <div className="my-10">
      <div className="space-y-2">
        <p className="text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <p className="text-gray-500">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
      </div>

      <div className="my-5 ">
        <div className="space-y-3">
          <p className="text-xl font-medium">Shipping Options:</p>
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Standard :</p>
                <p> 6-7 Days, Shipping Cost - Free</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Express :</p>
                <p>1-2 Days, Shipping Cost - $20</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Courier:</p>
                <p> 2-3 Days, Shipping Cost - $30</p>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Fastgo :</p>
                <p> 1-3 Days, Shipping Cost - $15</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
