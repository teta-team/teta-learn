import { useEffect } from "react";
import Project from "../../components/Project";

function Physics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="physics lesson">
      <div className="container">
        <div className="d-flex row f-wrap">
          <Project
            id="ions"
            lesson="chemistry"
            image="https://irqplmkfkyawozeafpao.supabase.co/storage/v1/object/public/images//1736083361279-ions.png"
            fname="یون نویسی"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، "
            tags={["همه", "شیمی 1"]}
          />
          <Project
            id="ions"
            lesson="chemistry"
            image="https://irqplmkfkyawozeafpao.supabase.co/storage/v1/object/public/images//1736083361279-ions.png"
            fname="یون نویسی"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، "
            tags={["همه", "شیمی 1"]}
          />
          <Project
            id="ions"
            lesson="chemistry"
            image="https://irqplmkfkyawozeafpao.supabase.co/storage/v1/object/public/images//1736083361279-ions.png"
            fname="یون نویسی"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، "
            tags={["همه", "شیمی 1"]}
          />
          <Project
            id="ions"
            lesson="chemistry"
            image="https://irqplmkfkyawozeafpao.supabase.co/storage/v1/object/public/images//1736083361279-ions.png"
            fname="یون نویسی"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، "
            tags={["همه", "شیمی 1"]}
          />
          <Project
            id="ions"
            lesson="chemistry"
            image="https://irqplmkfkyawozeafpao.supabase.co/storage/v1/object/public/images//1736083361279-ions.png"
            fname="یون نویسی"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، "
            tags={["همه", "شیمی 1"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Physics;
