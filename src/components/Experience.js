import React, { useContext } from "react";
import { VersionContext, VERSION } from "./VersionContext";
import { motion } from "framer-motion";
import { experienceV1, experienceV2 } from "../files/experience";

const Experience = () => {
  const version = useContext(VersionContext);
  const data = version === VERSION.V1 ? experienceV1 : experienceV2;

  return (
    <div className="min-h-full bg-white pb-72 pt-48 dark:bg-black">
      <motion.div
        className="container mx-auto p-6 md:p-12"
        initial={{ opacity: 0, scale: 0.75, y: 200 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">Experience</h1>
        <div className="table_container pt-12">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th>Year</th>
                <th>Company</th>
                <th className="hidden md:block">Position</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.id}>
                  <td>{data.year}</td>
                  <td>{data.company}</td>
                  <td className="hidden md:block">{data.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
